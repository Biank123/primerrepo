document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('backgroundMusic');
    const MusicButton = document.getElementById('pararmusica');

    // Función para reproducir la música
    function reproducirMusica() {
        audio.play();
        MusicButton.textContent = 'Parar Sonido';
    }

    // Función para detener la música
    function detenerMusica() {
        audio.pause();
        MusicButton.textContent = 'Reproducir Sonido';
    }

    // Alternar la reproducción de la música
    MusicButton.addEventListener('click', function () {
        if (audio.paused) {
            reproducirMusica();
        } else {
            detenerMusica();
        }
    });

    // Verificar el estado inicial de la música y actualizar el texto del botón
    if (audio.paused) {
        MusicButton.textContent = 'Reproducir Sonido';
    } else {
        MusicButton.textContent = 'Parar Sonido';
    }

    // Iniciar la música automáticamente cuando la página se carga
    reproducirMusica();
});

// _____________________________________________________________________________________

// Tiempo en cuenta regresiva

document.addEventListener('DOMContentLoaded', function () {
    const tiempoInicial = 60; // Tiempo inicial en segundos
    let tiempoRestante = tiempoInicial;
    const contadorElemento = document.getElementById('tiempo');
    let intervalo;
    const cancelButton = document.getElementById('cancelbutton');

    function actualizarContador() {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;
        const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;
        contadorElemento.textContent = `Tiempo: ${minutos}:${formatoSegundos}`;
    }

    function iniciarContador() {
        actualizarContador();
        intervalo = setInterval(function () {
            tiempoRestante--;
            if (tiempoRestante < 0) {
                clearInterval(intervalo);
                contadorElemento.textContent = '¡Tiempo agotado!';
                mostrarResultado(false); 
            } else {
                actualizarContador();
            }
        }, 1000); // Actualiza cada segundo (1000 milisegundos)
    }

    playButton.addEventListener('click', function () {
        if (intervalo) clearInterval(intervalo); // Reinicia el intervalo si ya está corriendo
        tiempoRestante = tiempoInicial; // Reinicia el tiempo a 60 segundos
        iniciarContador(); // Inicia el contador al hacer clic en el botón
        resultado.classList.remove('resultado-visible');
        parejasEncontradas = 0;
        ganador = false;
    });

    cancelButton.addEventListener('click', function () {
        if (intervalo) clearInterval(intervalo); // Detiene el intervalo
        tiempoRestante = tiempoInicial; // Reinicia el tiempo a 60 segundos
        actualizarContador(); // Actualiza el contador
        resultado.classList.remove('resultado-visible'); 
    });
    iniciarContador()
});

// _____________________________________________________________________________________

// Girar las casillas: 

document.addEventListener('DOMContentLoaded', function () {
    const casillas = document.querySelectorAll('.casilla img');
    const startButton = document.getElementById('playButton');
    const cancelButton = document.getElementById('cancelbutton');
    let firstCard = null;
    let lockBoard = false;
    let gameStarted = false;
    let matchedCards = [];

    const dinosaurImages = Array.from(casillas).map(casilla => casilla.getAttribute('data-original'));

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function resetBoard() {
        [firstCard, lockBoard] = [null, false];
    }

    function initializeBoard() {
        shuffle(dinosaurImages);
        casillas.forEach((casilla, index) => {
            casilla.setAttribute('data-original', dinosaurImages[index]);
            casilla.setAttribute('src', 'casillagiradadino.jpg');
        });
    }

    startButton.addEventListener('click', function () {
        gameStarted = true;
        initializeBoard();
        // Reset game variables
        firstCard = null;
        lockBoard = false;
        matchedCards = [];
    });

    cancelButton.addEventListener('click', function () {
        gameStarted = false;
        initializeBoard();
        // Reset game variables
        firstCard = null;
        lockBoard = false;
        matchedCards = [];
    });

    casillas.forEach(casilla => {
        casilla.addEventListener('click', function () {
            if (!gameStarted || lockBoard || casilla === firstCard || matchedCards.includes(casilla)) return;

            const originalSrc = casilla.getAttribute('data-original');
            casilla.setAttribute('src', originalSrc);

            if (!firstCard) {
                firstCard = casilla;
                return;
            }

            if (firstCard.getAttribute('data-original') === casilla.getAttribute('data-original')) {
                matchedCards.push(firstCard);
                matchedCards.push(casilla);
                resetBoard();
            } else {
                const tempFirstCard = firstCard;
                const tempSecondCard = casilla;
                lockBoard = true;
                setTimeout(() => {
                    tempFirstCard.setAttribute('src', 'casillagiradadino.jpg');
                    tempSecondCard.setAttribute('src', 'casillagiradadino.jpg');
                    resetBoard();
                }, 500);
            }
        });
    });
});
// _____________________________________________________________________________________

// Mostrar resultados: 

document.addEventListener('DOMContentLoaded', function () {
    function mostrarResultado(ganador) {
        const resultadoTexto = document.getElementById("texto");
    
        if (ganador) {
            resultadoTexto.textContent = 'RESULTADOS: ¡TE SALVASTE!';
        } 
        else if (!ganador){
            resultadoTexto.textContent = 'RESULTADOS: ¡EXTINTO!';
        } else{
            resultadoTexto.textContent = 'RESULTADOS: ¿TE SALVARÁS?'
        }
    
        const resultado = document.getElementById("resultado");
        resultado.classList.add('resultado-visible');
    }
mostrarResultado();
});


// PROBLEMAS: El reloj inicia al cargar la página y no solamente al hacer click en inicio.
// No se muestran los resultados

// Lógica del juego:
// Se hace click en el botón de inicio, se ejecuta la función de inicio.
// La función de inicio, mezcla aleatoriamente las imágenes y comienza el conteo regresivo del tiempo.
// También se comprueba en cada imágen seleccionada si se encuentra o no el par.
// Si se encuentra su par y es el último par del juego, los resultados se actualizan a "¡TE SALVASTE!";
// Si no se encuentran todos los pares antes de 30 segundos, los resultados se actualizan a "¡EXTINTO!";
// Una vez apretado el inicio, su texto cambia a "REINICIAR", lo que restaura el tiempo a 30 seg. y mezcla de nuevo las img.
// Las imágenes están ocultas al cargar la página y sólo se muestran al hacerles click, por 2 segundos.
// Si al hacerle click a la imagen hay otra mostrándose y es el par, quedan mostrándose ambas.
// Al perder, todas las imágenes se muestran hasta que el jugador dé click a REINICIAR.