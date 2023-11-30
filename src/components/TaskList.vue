<script setup>
import {useTasksStore} from "@/store/tasks";


const tasksStore = useTasksStore();


const deleteTask = (task)=> {

  if(confirm('Etes vous sur de vouloir supprimer cette tâche ?')){
    tasksStore.removeTask(task.id)
  }
}


const reset = ()=>{
  tasksStore.reset()
}

tasksStore.$subscribe((mutation) => {
  tasksStore.save();
});
</script>

<template>
  <div class="py-6">
    <div style="display: flex; align-items: center">
      <h1 class="text-4xl mt-10 mb-4" style="margin: 0 10px 30px 0">Taches</h1>
      <button
          @click="reset"
          class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          style="height: 40px; margin-bottom: 30px"
      >
        Reinitialiser tout
      </button>
    </div>

    <div>
      <div
          class="bg-white rounded-lg flex px-4 py-4 mb-4"
          v-for="task in tasksStore.tasks"
         :key="task.id"
      >
        <div class="relative mr-2">
          <div class="round mr-2">
            <input type="checkbox" :id="task.id" v-model="task.completed" />
            <label :for="task.id"></label>
          </div>
        </div>
        <div class="pl-4 w-full">
          <span class="text-xl font-semibold" :class=" task.completed " >{{ task.name }}</span>
          <p class="text-gray-500 text-sm w-full">{{ task.description}}</p>
          <div class="flex justify-end mt-4">

            <button class="w-7 h-7 bg-red-100 text-red-700 rounded" @click="deleteTask(task)">

              <i class="las la-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>