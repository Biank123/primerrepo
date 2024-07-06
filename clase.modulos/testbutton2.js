
document.getElementById("mi-boton").addEventListener("click", function () {
    alert("botón clicado")
}
)

function colorRandom() {
    const letras = '0123456789ABCDEF'; //Declara una constante letters que contiene los caracteres 
    //hexadecimales usados para crear colores
    let color = '#'; //Declara una variable color y la inicializa 
    //con el carácter #, que indica el comienzo de un color hexadecimal.
    for (let x = 0; x < 6; x++) { //Inicia un bucle for que se ejecuta 6 veces.
        color += letras[Math.floor(Math.random() * 16)]; //En cada iteración, añade un carácter 
        //aleatorio de letters a color. Math.random() * 16 genera un número aleatorio entre 0 y 15, 
        //y Math.floor redondea ese número hacia abajo al entero más cercano.
    }
    return color; //Devuelve el color hexadecimal generado.
}

document.getElementById("cambiar-color").addEventListener("click", function () {
    document.body.style.backgroundColor = colorRandom(); //Dentro de la función de clic, cambia la propiedad 
    //backgroundColor del elemento body al valor retornado por getRandomColor(), cambiando así el color de fondo del documento.
})

const botonEnviar = document.getElementById("boton");
const inputTexto = document.getElementById("textoInput");

botonEnviar.addEventListener("click", function () {
    const texto = inputTexto.value; // Obtener el valor del input: 
    //.value obtiene el texto que el usuario ha escrito dentro del formulario.
    console.log(texto); // Imprimir el valor en la consola
    inputTexto.value = ''; // Establecer el valor del input a una cadena vacía, borrando el texto
});