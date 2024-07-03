
// Importación de la clase Task desde el archivo task.js
import { Task } from './task.js';
// Importación de la clase TaskManager desde el archivo taskManager.js
import { TaskManager } from './taskManager.js';

// Creación de una instancia de TaskManager
let taskManager = new TaskManager();

// Creación de instancias de Task con diferentes descripciones
let task1 = new Task('Lavar la loza');
let task2 = new Task('Sacar la basura');
let task3 = new Task('Estudiar un montón');

// Agregar las instancias de Task al gestor de tareas utilizando el método addTask de TaskManager
taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(task3);

// Marcar una tarea específica como completada utilizando la descripción de la tarea
taskManager.markTaskAsCompleted('Sacar la basura');

// Listar todas las tareas almacenadas utilizando el método listTasks de TaskManager
taskManager.listTasks();