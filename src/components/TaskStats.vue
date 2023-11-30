<script setup>
import {useTasksStore} from "@/store/tasks";
import {computed} from "vue";

const tasksStore = useTasksStore();
</script>

<template>
  <div class="flex flex-wrap -mx-4">
    <div class="px-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
      <div class="flex bg-white px-4 py-6 rounded-lg">
        <div class="w-1/3 flex justify-center">
          <i class="las la-check text-3xl text-green-400"></i>
        </div>
        <div class="w-2/3 flex flex-col items-center">
          <span class="text-2xl">{{ tasksStore.completedTasks }}</span>
          <span class="">Terminées</span>
        </div>
      </div>
    </div>
    <div class="px-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
      <div class="flex bg-white px-4 py-6 rounded-lg">
        <div class="w-1/3 flex justify-center">
          <i class="las la-hourglass-half text-3xl text-orange-400"></i>
        </div>
        <div class="w-2/3 flex flex-col items-center">
          <span class="text-2xl">{{ tasksStore.pendingTasks }}</span>
          <span class="">En attente</span>
        </div>
      </div>
    </div>
    <div class="px-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
      <div class="flex bg-white px-4 py-6 rounded-lg">
        <div class="w-1/3 flex justify-center">
          <i class="las la-tasks text-3xl text-gray-700"></i>
        </div>
        <div class="w-2/3 flex flex-col items-center">
          <span class="text-2xl">{{ tasksStore.tasks.length }}</span>
          <span class="">Total</span>
        </div>
      </div>
    </div>
  </div>
</template>