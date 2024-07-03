
// Definición de la clase TaskManager que inicializa un array vacío para almacenar las tareas
export class TaskManager {
    constructor() {
        this.tareas = [];
    }

    // Método addTask que acepta un objeto Tarea y lo agrega al array tareas
    addTask(tarea) {
        this.tareas.push(tarea);
    }

    // Método listTasks que imprime en la consola los detalles de todas las tareas almacenadas
    listTasks() {
        // Iteración sobre el array tareas para llamar al método displayTask de cada tarea y mostrar las descripciones
        this.tareas.forEach(tarea => {
            console.log(`Tarea: ${tarea.description}, Completada: ${tarea.completed}`);
        });
    }

    // Método markTaskAsCompleted que marca una tarea como completada basada en su descripción
    markTaskAsCompleted(description) {
        // Se busca la tarea dentro del array tareas basado en la descripción
        let encontrarTarea = this.tareas.find(tarea => tarea.description === description);
        // Verificación para asegurarse de que se encontró la tarea
        if (encontrarTarea) {
            // Si se encontró la tarea, se llama al método markAsCompleted:
            encontrarTarea.markAsCompleted();
        }
    }
}
