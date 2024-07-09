document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    const audio = document.getElementById('backgroundMusic'); // Obtiene el elemento de audio
    const MusicButton = document.getElementById('pararmusica'); // Obtiene el botón de control de música

    // Función para reproducir la música
    function reproducirMusica() {
        audio.play(); // Reproduce la música
        MusicButton.textContent = 'Parar Sonido'; // Actualiza el texto del botón de música
    }

    // Función para detener la música
    function detenerMusica() {
        audio.pause(); // Pausa la música
        MusicButton.textContent = 'Reproducir Sonido'; // Actualiza el texto del botón de música
    }

    // Constante para el número total de pares de casillas
    const totalParesCasillas = 9;

    // Función para determinar el estado del juego y actualizar el texto del resultado
    function determinarGanador() {
        if (gameStarted && matchedCards.length === totalParesCasillas && tiempoRestante >= 0) {
            return 'fin-bueno'; // Retorna estado de fin bueno si se han encontrado todos los pares antes de que el tiempo se agote
        } else if (gameStarted && matchedCards.length !== totalParesCasillas && tiempoRestante <= 0) {
            return 'fin-malo'; // Retorna estado de fin malo si no se han encontrado todos los pares y el tiempo se agotó
        } else if (!gameStarted) {
            return 'inicio'; // Retorna estado de inicio si el juego no ha comenzado
        } else {
            return 'jugando'; // Retorna estado de jugando si el juego está en progreso
        }
    }

    // Función para mostrar resultados según el estado del juego
    function mostrarResultado(estado) {
        let resultadoTexto = document.getElementById("texto"); // Obtiene el elemento donde se mostrará el resultado
        determinarGanador();
        // Switch para determinar el texto del resultado según el estado
        switch (estado) {
            case 'inicio':
                resultadoTexto.textContent = 'RESULTADOS: ¡COMIENZA EL JUEGO!'; // Muestra el mensaje de inicio del juego
                break;
            case 'fin-bueno':
                lockBoard = true;
                clearInterval(intervalo); // Detiene el contador al ganar
                resultadoTexto.textContent = 'RESULTADOS: ¡TE SALVASTE!'; // Muestra el mensaje de ¡Te salvaste!
                break;
            case 'fin-malo':
                resetBoard();
                resultadoTexto.textContent = 'RESULTADOS: ¡EXTINTO!'; // Muestra el mensaje de ¡Extinto!
                break;
            case 'jugando':
                resultadoTexto.textContent = 'RESULTADOS: ...'; // Muestra puntos suspensivos mientras se está jugando
                break;
        }
    }

    // Función para determinar el estado del juego y actualizar el texto del resultado
    function determinarGanador() {
        const todasMostrandoDinosaurios = Array.from(casillas).every(casilla => {
            const src = casilla.getAttribute('src');
            return src === casilla.getAttribute('data-original');
        });
        if (gameStarted && todasMostrandoDinosaurios && tiempoRestante >= 0) {
            return 'fin-bueno'; // Retorna estado de fin bueno si todas las casillas muestran dinosaurios antes de que el tiempo se agote
        } else if (gameStarted && !todasMostrandoDinosaurios && tiempoRestante <= 0) {
            return 'fin-malo'; // Retorna estado de fin malo si no se muestran todos los dinosaurios y el tiempo se agotó
        } else if (!gameStarted) {
            return 'inicio'; // Retorna estado de inicio si el juego no ha comenzado
        } else {
            return 'jugando'; // Retorna estado de jugando si el juego está en progreso
        }
    }
    // Función para verificar si todas las casillas muestran imágenes de dinosaurios
    function verificarResultado() {
        const todasMostrandoDinosaurios = Array.from(casillas).every(casilla => {
            const src = casilla.getAttribute('src');
            return src === casilla.getAttribute('data-original');
        });

        if (todasMostrandoDinosaurios && tiempoRestante >= 0) {
            mostrarResultado('fin-bueno'); // Muestra el resultado de fin bueno si todas las casillas muestran dinosaurios y el tiempo no se ha agotado
        }
    }
    // Alternar la reproducción de la música
    MusicButton.addEventListener('click', function () {
        if (audio.paused) {
            reproducirMusica(); // Si la música está pausada, la reproduce
        } else {
            detenerMusica(); // Si la música está reproduciéndose, la detiene
        }
    });

    // Verificar el estado inicial de la música y actualizar el texto del botón
    if (audio.paused) {
        MusicButton.textContent = 'Reproducir Sonido'; // Si la música está pausada, muestra "Reproducir Sonido"
    } else {
        MusicButton.textContent = 'Parar Sonido'; // Si la música está reproduciéndose, muestra "Parar Sonido"
    }

    // Iniciar la música automáticamente cuando la página se carga
    reproducirMusica(); // Llama a la función para reproducir la música al cargar la página

    // Tiempo en cuenta regresiva
    const tiempoInicial = 60; // Tiempo inicial en segundos
    let tiempoRestante = tiempoInicial; // Tiempo restante inicializado al tiempo inicial
    const contadorElemento = document.getElementById('tiempo'); // Obtiene el elemento donde se mostrará el contador
    let intervalo; // Variable para almacenar el intervalo del contador
    const playButton = document.getElementById('playButton'); // Obtiene el botón de inicio
    const cancelButton = document.getElementById('cancelbutton'); // Obtiene el botón de cancelar

    // Función para actualizar el contador de tiempo en pantalla
    function actualizarContador() {
        const minutos = Math.floor(tiempoRestante / 60); // Calcula los minutos restantes
        const segundos = tiempoRestante % 60; // Calcula los segundos restantes
        const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos; // Formatea los segundos para que siempre tengan dos dígitos
        contadorElemento.textContent = `Tiempo: ${minutos}:${formatoSegundos}`; // Actualiza el texto del elemento del contador
    }

    // Función para iniciar el contador de tiempo
    function iniciarContador() {
        actualizarContador(); // Llama a la función para actualizar el contador
        intervalo = setInterval(function () {
            tiempoRestante--; // Decrementa el tiempo restante
            if (tiempoRestante < 0) {
                clearInterval(intervalo); // Detiene el intervalo si el tiempo se agota
                tiempoRestante = 0; // Asegura que el tiempo no sea negativo
                contadorElemento.textContent = '¡Tiempo agotado!'; // Muestra mensaje de tiempo agotado
                mostrarResultado('fin-malo'); // Llama a la función para mostrar el resultado de fin malo
            } else {
                actualizarContador(); // Actualiza el contador si el tiempo no se ha agotado
            }
        }, 1000); // Actualiza cada segundo (1000 milisegundos)
    }

    // Evento click para el botón de inicio
    playButton.addEventListener('click', function () {
        if (intervalo) clearInterval(intervalo); // Detiene el intervalo si ya está corriendo
        tiempoRestante = tiempoInicial; // Reinicia el tiempo a 60 segundos
        iniciarContador(); // Inicia el contador al hacer clic en el botón
        parejasEncontradas = 0; // Reinicia el contador de parejas encontradas
        gameStarted = true; // Establece que el juego ha comenzado
        mostrarResultado('jugando'); // Llama a la función para mostrar el resultado de estado jugando
    });

    // Evento click para el botón de cancelar
    cancelButton.addEventListener('click', function () {
        if (intervalo) clearInterval(intervalo); // Detiene el intervalo si está corriendo
        tiempoRestante = tiempoInicial; // Reinicia el tiempo a 60 segundos
        actualizarContador(); // Actualiza el contador de tiempo
        parejasEncontradas = 0; // Reinicia el contador de parejas encontradas
        gameStarted = false; // Establece que el juego no ha comenzado
        mostrarResultado('inicio'); // Llama a la función para mostrar el resultado de estado inicio
    });

    // Girar las casillas:
    const casillas = document.querySelectorAll('.casilla img'); // Obtiene todas las imágenes de las casillas
    let firstCard = null; // Variable para almacenar la primera carta seleccionada
    let lockBoard = false; // Variable para bloquear el tablero temporalmente
    let gameStarted = false; // Variable para verificar si el juego ha comenzado
    let matchedCards = []; // Array para almacenar las cartas que han sido emparejadas

    // Obtiene las imágenes originales de dinosaurios de cada casilla
    const dinosaurImages = Array.from(casillas).map(casilla => casilla.getAttribute('data-original'));

    // Función para mezclar el array de imágenes
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos aleatoriamente
        }
    }

    // Función para reiniciar el tablero
    function resetBoard() {
        [firstCard, lockBoard] = [null, false]; // Reinicia las variables firstCard y lockBoard
    }

    // Función para inicializar el tablero con las imágenes de dinosaurios
    function initializeBoard() {
        shuffle(dinosaurImages); // Mezcla las imágenes de dinosaurios
        casillas.forEach((casilla, index) => {
            casilla.setAttribute('data-original', dinosaurImages[index]); // Asigna las imágenes mezcladas a las casillas
            casilla.setAttribute('src', 'casillagiradadino.jpg'); // Establece la imagen de fondo para todas las casillas
        });
    }

    // Evento click para el botón de inicio
    playButton.addEventListener('click', function () {
        gameStarted = true; // Establece que el juego ha comenzado
        initializeBoard(); // Inicializa el tablero con las imágenes de dinosaurios
        firstCard = null; // Reinicia la variable firstCard
        lockBoard = false; // Desbloquea el tablero
        matchedCards = []; // Reinicia el array de cartas emparejadas
        mostrarResultado('jugando'); // Llama a la función para mostrar el resultado de estado jugando
    });

    // Evento click para el botón de cancelar
    cancelButton.addEventListener('click', function () {
        gameStarted = false; // Establece que el juego no ha comenzado
        initializeBoard(); // Inicializa el tablero con las imágenes de dinosaurios
        firstCard = null; // Reinicia la variable firstCard
        lockBoard = false; // Desbloquea el tablero
        matchedCards = []; // Reinicia el array de cartas emparejadas
        mostrarResultado('inicio'); // Llama a la función para mostrar el resultado de estado inicio
    });

    // Evento click para cada casilla
    casillas.forEach(casilla => {
        casilla.addEventListener('click', function () {
            if (!gameStarted || lockBoard || casilla === firstCard || matchedCards.includes(casilla)) return; // Si el juego no ha comenzado, el tablero está bloqueado, la casilla es igual a la primera carta o la casilla ya está emparejada, no hace nada

            const originalSrc = casilla.getAttribute('data-original'); // Obtiene la imagen original de la casilla
            casilla.setAttribute('src', originalSrc); // Muestra la imagen original de la casilla al hacer clic

            if (!firstCard) {
                firstCard = casilla; // Almacena la primera carta seleccionada
                return;
            }

            if (firstCard.getAttribute('data-original') === casilla.getAttribute('data-original')) { // Si las imágenes son iguales
                matchedCards.push(firstCard); // Añade la primera carta al array de cartas emparejadas
                matchedCards.push(casilla); // Añade la segunda carta al array de cartas emparejadas
                resetBoard(); // Reinicia el tablero
                verificarResultado(); // Verifica si se han encontrado todos los pares
            } else {
                const tempFirstCard = firstCard; // Almacena temporalmente la primera carta
                const tempSecondCard = casilla; // Almacena temporalmente la segunda carta
                lockBoard = true; // Bloquea el tablero temporalmente
                setTimeout(() => {
                    tempFirstCard.setAttribute('src', 'casillagiradadino.jpg'); // Vuelve a mostrar la imagen de fondo de la primera carta
                    tempSecondCard.setAttribute('src', 'casillagiradadino.jpg'); // Vuelve a mostrar la imagen de fondo de la segunda carta
                    resetBoard(); // Reinicia el tablero
                }, 500); // Espera 500 milisegundos antes de ejecutar la función setTimeout
            }
        });
    });

    // Inicializar el mensaje al cargar la página
    mostrarResultado('inicio'); // Llama a la función para mostrar el resultado de estado inicio
    verificarResultado(); // Llama a la función para verificar el resultado después de cada clic en una casilla
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
// Al perder, todas las imágenes se muestran hasta que el jugador dé click a INICIAR nuevamente
