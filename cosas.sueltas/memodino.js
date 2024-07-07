document.addEventListener('DOMContentLoaded', function() {
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
    MusicButton.addEventListener('click', function() {
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

document.addEventListener('DOMContentLoaded', function() {
    const tiempoInicial = 30; // Tiempo inicial en segundos
    let tiempoRestant = tiempoInicial;
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
        intervalo = setInterval(function() {
            tiempoRestante--;
            if (tiempoRestante < 0) {
                clearInterval(intervalo);
                contadorElemento.textContent = '¡Tiempo agotado!';
            } else {
                actualizarContador();
            }
        }, 1000); // Actualiza cada segundo (1000 milisegundos)
    }

    playButton.addEventListener('click', function() {
        if (intervalo) clearInterval(intervalo); // Reinicia el intervalo si ya está corriendo
        tiempoRestante = tiempoInicial; // Reinicia el tiempo a 30 segundos
        iniciarContador(); // Inicia el contador al hacer clic en el botón
    });

    cancelButton.addEventListener('click', function() {
        if (intervalo) clearInterval(intervalo); // Detiene el intervalo
        tiempoRestante = tiempoInicial; // Reinicia el tiempo a 30 segundos
        actualizarContador(); // Actualiza el contador para mostrar 00:30
    });

    // Aquí llamamos a la función para iniciar la música automáticamente cuando la página se carga
    reproducirMusica();
});

// _____________________________________________________________________________________

document.addEventListener('DOMContentLoaded', function() {
    const casillas = document.querySelectorAll('.casilla img');
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    casillas.forEach(casilla => {
        casilla.addEventListener('click', function() {
            if (lockBoard || casilla === firstCard) return;

            const originalSrc = casilla.getAttribute('data-original');
            casilla.setAttribute('src', originalSrc);

            if (!firstCard) {
                firstCard = casilla;
                return;
            }

            secondCard = casilla;
            lockBoard = true;

            if (firstCard.getAttribute('data-original') === secondCard.getAttribute('data-original')) {
                resetBoard();
            } else {
                setTimeout(() => {
                    firstCard.setAttribute('src', 'placeholder.jpg');
                    secondCard.setAttribute('src', 'placeholder.jpg');
                    resetBoard();
                }, 2000);
            }
        });
    });

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }
});
     
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