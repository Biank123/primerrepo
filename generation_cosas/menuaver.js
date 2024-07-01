// Selecciona todos los elementos <a> cuyo atributo 'href' comienza con "#"
// Esto selecciona los enlaces que apuntan a anclas dentro de la misma página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    
    // Para cada uno de estos enlaces, añade un event listener para el evento 'click'
    anchor.addEventListener('click', function(e) {
        
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