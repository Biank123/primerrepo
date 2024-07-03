export class Task {
    constructor(description, completed = false) {
        this.description = description;
        this.completed = completed;
    }

    markAsCompleted() {
        this.completed = true;
    }

    displayTask() {
        console.log(`Tarea: ${this.description}, Completada: ${this.completed}`);
    }
}