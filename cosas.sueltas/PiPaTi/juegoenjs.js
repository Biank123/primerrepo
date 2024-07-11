// Jugar piedra, papel o tijera con la computadora:

const manos = {
    piedra: 'piedra.webp',
    papel: 'papel.png',
    tijera: 'tijera.png'
};

const sonidoGanar = new Audio('win.mp3');
const sonidoPerder = new Audio('lose.mp3');
const sonidoClick = new Audio('click.mp3');
const sonidoEmpate = new Audio('empate.mp3');

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
    sonidoClick.play();
    let eleccion_pc = obtener_eleccion_pc();
    let resultado = determinar_ganador(eleccion_usuario, eleccion_pc);

    const resultadosDiv = document.getElementById('resultados');
    const eleccionesDiv = document.getElementById('elecciones');
    const jugarOtraVezBtn = document.getElementById('jugar-otra-vez');
    let cambioIntervalo;
    let index = 0;
    const opciones = ['piedra', 'papel', 'tijera'];

    function cambiarManos() {
        eleccionesDiv.style.display = 'none';
        resultadosDiv.innerHTML = `
            <div id="mano-jugador"><img src="${manos[opciones[index % 3]]}" width="100"></div>
            <div id="mano-pc"><img src="${manos[opciones[index % 3]]}" width="100"></div>
        `;
        index++;
    }

    // cambia las imágenes cada 300 milisegundos
    cambioIntervalo = setInterval(cambiarManos, 300);

    setTimeout(() => {
        clearInterval(cambioIntervalo);
        resultadosDiv.innerHTML = `
            <div id="result-container">
                <div id="manos-resultados">
                    <div id="mano-jugador"><img src="${manos[eleccion_usuario]}" width="100"></div>
                    <div id="mano-pc"><img src="${manos[eleccion_pc]}" width="100"></div>
                </div>
                <div id="texto-resultados">
                    <p><b>Tú elegiste: ${eleccion_usuario}</b></p>
                    <p><b>La computadora eligió: ${eleccion_pc}</b></p>
                    <p><b>Resultado: ${resultado}</b></p>
                </div>
            </div>
        `;

        if (resultado === "¡Ganaste!") {
            sonidoGanar.play();  
        } else if (resultado === "Perdiste.") {
            sonidoPerder.play();  
        } else if (resultado === "Empate") {
            sonidoEmpate.play();  
        }

        jugarOtraVezBtn.style.display = 'block';
    }, 2000); // el tiempo que tarda en mostrar resultados
}

function reiniciarJuego() {
    document.getElementById('resultados').innerHTML = '';
    document.getElementById('jugar-otra-vez').style.display = 'none';
    document.getElementById('elecciones').style.display = 'block';
}


juego();


