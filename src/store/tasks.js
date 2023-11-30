import {defineStore} from "pinia";
import Storage from "@/utils/Storage";

const taskStorage = Storage.fetchAll()
export const useTasksStore = defineStore("tasks", {
    state() {
        return {
            tasks: taskStorage || [],
            selectedTask: null,
            modify: false
        }
    },
    getters: {
        completedTasks(state) {
            return state.tasks.filter(task => task.completed === true).length
        },
        pendingTasks() {
            return this.tasks.length - this.completedTasks;
        }
    },
    actions: {
        removeTask(taskId) {
            this.tasks = this.tasks.filter(tasks => tasks.id !== taskId);
        },
        createTask(data) {
            this.tasks.push(data)
        },
        save() {
            Storage.performUpdate(this.tasks)
        },
        reset() {
            this.tasks.forEach(task => {
                task.completed = false
            })
        }
    }
});