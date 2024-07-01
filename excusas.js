// Generador de excusas

const array1 = ["Un perro ", "Un alien ", "Mi mamá ", "Una gallina ", "El vecino "];
const array2 = ["se comió ", "invadió ", "me pidió sacar ", "quemó ", "picoteó "];
const array3 = ["mi tarea.", "mi pieza.", "el pollo del congelador.", "Estación central."];

function excusa(){
    const x = array1[Math.floor(Math.random() * array1.length)];
    const y = array2[Math.floor(Math.random() * array2.length)];
    const z = array3[Math.floor(Math.random() * array3.length)];
    return x + y + z;
}

function entrada_usuario() {
    let pregunta = prompt("No pude hacer lo que me pediste, ¿quieres saber por qué? (si/no): ").toLowerCase();

    while (!['sí', 'si', 'no'].includes(pregunta)) {
        console.log("Respuesta inválida, por favor, intente de nuevo.");
        pregunta = prompt("No pude hacer lo que me pediste, ¿quieres saber por qué? (si/no): ").toLowerCase();
    }
    if (pregunta === "si" || pregunta === "sí") {
        return excusa();
    } else if (pregunta === "no") {
        return "A modo que ni quería";
    }
}
function jugando(){
    console.log(entrada_usuario());
}
jugando();