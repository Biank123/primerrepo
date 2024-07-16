const ingreso = document.getElementById("ingreso");
const boton = document.getElementById("button");
const lista = document.getElementById("lista");

function hacerClick() {
  boton.addEventListener("click", function () {
    agregarTarea();
    guardarTareas();
  });
}

function agregarTarea() {
  const tarea = document.createElement("li");
  tarea.textContent = ingreso.value;
  lista.appendChild(tarea);
  botonEliminar(tarea);
  ingreso.value = "";
}
function botonEliminar(tarea) {
  const eliminar = document.createElement("button");
  eliminar.textContent = "Eliminar tarea";
  eliminar.addEventListener("click", function () {
    lista.removeChild(tarea);
    guardarTareas();
  });
  tarea.appendChild(eliminar);
}

function guardarTareas() {
  const lasTareas = []; //array que almacena las tareas
  lista.querySelectorAll("li").forEach((tarea) => {
    //itera sobre cada tarea en la lista
    lasTareas.push(tarea.textContent.replace("Eliminar tarea", "").trim());
    // añade el texto de la tarea al array, menos el texto del botón de eliminar tarea
  });
  localStorage.setItem("lasTareas", JSON.stringify(lasTareas)); // guarda el array de tareas en local storage (como string)
}

function cargarTareas() {
  const tareasGuardadas = localStorage.getItem("lasTareas"); // obtiene las tareas guardadas de local storage
  const array = tareasGuardadas ? JSON.parse(tareasGuardadas) : []; // parsea las tareas guardadas si existen, o crea un array vacío. (parsear se refiere a convertir una cadena JSON en un objeto JavaScript)
  array.forEach((texto) => {
    const tarea = document.createElement("li"); // crea un nuevo elemento de lista para cada tarea
    tarea.textContent = texto; // asigna el texto de la tarea
    lista.appendChild(tarea); // añade la tarea a la lista
    botonEliminar(tarea); // añade un botón de eliminar a la tarea
  });
}

hacerClick();
cargarTareas(); // carga las tareas desde local storage al cargar la página
