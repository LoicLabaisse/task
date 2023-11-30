<script setup>
import {ref} from "vue"
import {useTasksStore} from "@/store/tasks";
import {v4 as uuid} from "uuid"

const name = ref("");
const description = ref("")
const taskStore = useTasksStore()

function handleSubmit() {
  const task ={
    id: taskStore.selectedTask ? taskStore.selectedTask.id :uuid(),
    completed: false,
    name: name.value,
    description: description.value
  }
  if(taskStore.selectedTask){
    taskStore.selectedTask =null
  }
  taskStore.createTask(task)

  _clearForm();
}

function _clearForm() {
  name.value = "";
  description.value = "";
}
function cancelUpdate() {
  taskStore.createTask(taskStore.selectedTask);
  taskStore.selectedTask = null;

  _clearForm();
}

taskStore.$subscribe((mutation) => {
  const selectedTask = mutation.events.target.selectedTask;

  if (selectedTask) {
    name.value = selectedTask.name;
    description.value = selectedTask.description;
  }
})
</script>

<template>
  <form class="px-4 sm:px-8 md:px-16 flex flex-col justify-center h-full" @submit.prevent="handleSubmit">
    <h1 class="text-3xl font-semibold mb-6 sm:mb-8">
      {{taskStore.selectedTask ? "Modifier une tache" : "Nouvelle tache"}}
    </h1>
    <div class="mb-4 sm:mb-6">
      <input
          v-model="name"
          placeholder="Name"
          class="inline-flex w-full px-2 py-3 rounded-lg border-2 border-gray-300 focus:outline-none"
      />
    </div>
    <div class="mb-4 sm:mb-6">
      <textarea
          v-model="description"
          placeholder="Description de la tache"
          class="inline-flex w-full px-3 py-4 rounded-lg border-2 border-gray-300 focus:outline-none"
          rows="6"
      ></textarea>
    </div>
    <div class="mb-4 sm:mb-6">
      <button class="bg-blue-100 text-blue-600 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded mr-2" type="submit">
        {{ taskStore.selectedTask ? "Mettre à jour" : "Créer" }}
      </button>
      <button
          v-if="taskStore.selectedTask"
          class="bg-red-100 text-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold "
          @click="cancelUpdate"
      >
        Annuler
      </button>
    </div>
  </form>
</template>


<style scoped>

</style>