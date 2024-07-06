// Selecciona todos los elementos <a> cuyo atributo 'href' comienza con "#"
// Esto selecciona los enlaces que apuntan a anclas dentro de la misma página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    // Para cada uno de estos enlaces, añade un event listener para el evento 'click'
    anchor.addEventListener('click', function (e) {

        // Previene el comportamiento predeterminado del enlace
        // Esto evita que el navegador salte instantáneamente a la sección y permite aplicar un desplazamiento suave
        e.preventDefault();

        // Obtiene el valor del atributo 'href' del enlace que se ha hecho clic
        // y lo utiliza para seleccionar el elemento objetivo
        document.querySelector(this.getAttribute('href')).scrollIntoView({

            // Define el comportamiento del desplazamiento como suave (smooth)
            // Esto hace que el desplazamiento sea animado en lugar de instantáneo
            behavior: 'smooth'
        });
    });
});

    function scrollGallery(direction) {
        const gallery = document.querySelector('.gallery');
        const scrollAmount = 200; // Cantidad de desplazamiento en píxeles

        let scrollValue = direction * scrollAmount;
        gallery.scrollBy({
            left: scrollValue,
            behavior: 'smooth' // Desplazamiento suave
        });
    }

    // Evento para detectar cuando se hace clic en una imagen
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            // Aquí puedes agregar lógica para lo que sucede al hacer clic en una imagen
            console.log('Haz clic en la imagen:', item.alt);
        });
    });
});