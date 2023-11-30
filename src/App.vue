<script setup>
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue'
import TaskStats from './components/TaskStats.vue'
import {ref} from "vue"
import {useTasksStore} from "@/store/tasks";
const tasksStore = useTasksStore();

function openModal() {
  tasksStore.modify = true
}

function closeModal() {
  tasksStore.modify = false
}
function closeCross(){
  tasksStore.createTask(tasksStore.selectedTask);
  tasksStore.selectedTask = null;
  tasksStore.modify = false

}

</script>

<template>
  <div class=" flex flex-col md:flex-row" style="height: 100vh">
    <div class="md:w-3/5 py-20" >
      <div class="w-4/5 mx-auto">
        <task-stats/>
        <div class="text-center mb-4 md:hidden">
          <button
              @click="openModal"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
           Ajouter une tache
          </button>
        </div>
        <task-list />
      </div>
    </div>
    <div  class="md:w-2/5 bg-lightgrey md:bg-white py-10">
      <!-- Modal -->
      <div v-if="tasksStore.modify" @click="closeModal" class="fixed inset-0 bg-black opacity-50 z-50 md:hidden"></div>
      <div v-if="tasksStore.modify" class="fixed inset-0 flex items-center justify-center z-50 md:hidden">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <button @click="closeCross" class="absolute top-20 right-0 m-4 text-gray-700 hover:text-gray-900">
            <i class="las la-times text-white text-3xl"></i>
          </button>
          <task-form />
        </div>
      </div>
      <!-- Regular task-form for larger screens -->
      <div class="hidden md:block">
        <task-form />
      </div>
    </div>
  </div>
</template>


<style>

</style>