// Jugar piedra, papel o tijera con la computadora:

function obtener_eleccion_usuario() {
    let elección = prompt("Ingrese 'piedra', 'papel' o 'tijera': ").toLowerCase();
    while (!['piedra', 'papel', 'tijera'].includes(elección)) {
        console.log("Opción no válida, por favor, intente de nuevo.");
        elección = prompt("Ingrese 'piedra', 'papel' o 'tijera': ").toLowerCase();
    }
    return elección;
}
function obtener_eleccion_pc() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const opcion = opciones[Math.floor(Math.random() * opciones.length)]; //como el import random o random.choice en python
    return opcion;
}
function determinar_ganador(eleccion_usuario, eleccion_pc) {
    if (eleccion_usuario === eleccion_pc) {
        return "Empate";
    } else if ((eleccion_usuario === 'piedra' && eleccion_pc === 'tijera') ||
               (eleccion_usuario === 'papel' && eleccion_pc === 'piedra') ||
               (eleccion_usuario === 'tijera' && eleccion_pc === 'papel')) {
        return "¡Ganaste!";
    } else {
        return "Perdiste.";
    }
}
function juego() {
    console.log("¡Juguemos piedra, papel o tijera!");
    while (true) {
        let eleccion_usuario = obtener_eleccion_usuario();
        let eleccion_pc = obtener_eleccion_pc();
        console.log("Tú elegiste: ", eleccion_usuario);
        console.log("La computadora eligió: ", eleccion_pc);
        let resultado = determinar_ganador(eleccion_usuario, eleccion_pc);
        console.log("Resultado: ", resultado);

        let jugar_otra_vez = prompt("¿Quieres jugar otra vez? (sí/no): ").toLowerCase();
        while (!['sí', 'si', 'no'].includes(jugar_otra_vez)) {
            jugar_otra_vez = prompt("Respuesta no válida. ¿Quieres jugar otra vez? (sí/no): ").toLowerCase();
        }
        if (jugar_otra_vez === 'no') {
            console.log("¡Gracias por jugar! Hasta la próxima.");
            break;
        }
    }
}
juego();
