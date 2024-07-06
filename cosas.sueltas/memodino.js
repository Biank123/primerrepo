// el pc esconde la imagen de unos dinosaurios en unas casillas al azar cada uno 
// y las muestra todas por 2 segundos (supongamos que hay 20 casillas en total y 
// todos son pares de diferentes dinosaurios), luego el usuario debe recordar dónde 
// estaban y seleccionar los pares. Para esto tiene 30 segundos, equivocarse hace que 
// la pantalla se vuelva roja por un segundo, para pasar debe haber seleccionado al menos 
// 3 pares de dinosaurios. Se juegan 4 rondas y si el usuario las pasa todas gana, si pasa 
// 2 empata con la computadora, si pasa 3 casi gana, si gana 1 pierde por bastante y si tiene 0, gana la computadora.

// Definición de variables globales
let tablero = []; // Array para mantener el estado actual de las casillas
let casillasVolteadas = []; // Array para mantener las casillas volteadas por el usuario
let parEncontrado = 0; // Contador de pares encontrados por el usuario
let round = 1; // Contador de rondas jugadas

function startGame(){
// Lógica para generar las casillas y colocar imágenes de dinosaurios al azar
    // Mostrar imágenes por 2 segundos
    setTimeout(hideTiles, 2000);
}
function hideTiles(){
// Lógica para ocultar las imágenes
}
function clickTile(){
 // Lógica para voltear una casilla y verificar si se ha encontrado un par
}
function checkPairs(){
// Lógica para verificar si los dos últimos tiles volteados forman un par
    // Si es correcto, incrementar pairsFound y mostrar mensaje o continuar con el juego
    // Si es incorrecto, mostrar la pantalla en rojo por un segundo
}
function updateTimer(){
// Lógica para actualizar el temporizador de 30 segundos
}
function endRound(){
    // Lógica para determinar el resultado de la ronda según el número de pares encontrados
    // Actualizar round y reiniciar el juego para la siguiente ronda si no es la última
}
function endGame(){
// Lógica para determinar el resultado final después de las 4 rondas
}
// Event listener para iniciar el juego al cargar la página
document.addEventListener('DOMContentLoaded', startGame);

// Añadir API con login de usuario con google, facebook o jugar anónimamente
// Añadir links a mi linkedin y github
