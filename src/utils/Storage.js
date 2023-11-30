export default new class Storage {
    constructor() {
        this.storage = localStorage
    }

    fetchAll() {
        const serializedTasks = this.storage.getItem('tasks');
        return JSON.parse(serializedTasks)
    }

    #save(tasks) {
        this.storage.setItem('tasks', JSON.stringify(tasks))
    }

    performUpdate(data){
        this.#save(data)
    }
}