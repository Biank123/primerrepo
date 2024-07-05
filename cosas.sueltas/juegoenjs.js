// Jugar piedra, papel o tijera con la computadora:

function obtener_eleccion_pc() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const opcion = opciones[Math.floor(Math.random() * opciones.length)];
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

function jugar(eleccion_usuario) {
    let eleccion_pc = obtener_eleccion_pc();
    let resultado = determinar_ganador(eleccion_usuario, eleccion_pc);

    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Tú elegiste: ${eleccion_usuario}</p>
        <p>La computadora eligió: ${eleccion_pc}</p>
        <p>Resultado: ${resultado}</p>
    `;

    document.getElementById('jugar-otra-vez').style.display = 'block';
    document.getElementById('elecciones').style.display = 'none';
}

function reiniciarJuego() {
    document.getElementById('resultados').innerHTML = '';
    document.getElementById('jugar-otra-vez').style.display = 'none';
    document.getElementById('elecciones').style.display = 'block';
}
juego();


