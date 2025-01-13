// Obtener el elemento de la imagen
const penguinGif = document.getElementById('penguinGif');

// Cuando el mouse entra en la imagen
penguinGif.addEventListener('mouseenter', function() {
    penguinGif.style.transition = 'transform 0.3s ease';  // Añadir una transición suave
    penguinGif.style.transform = 'scale(1.5)';  // Aumentar el tamaño de la imagen
});

// Cuando el mouse sale de la imagen
penguinGif.addEventListener('mouseleave', function() {
    penguinGif.style.transition = 'transform 0.3s ease';  // Transición suave
    penguinGif.style.transform = 'scale(1)';  // Restablecer al tamaño original
});

// Obtener todas las imágenes
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    const image = container.querySelector('.image-hover');
    const textContainer = container.querySelector('.text-container');
    
    // Evento cuando el mouse entra en la imagen
    image.addEventListener('mouseenter', () => {
        textContainer.style.display = 'block';  // Mostrar el texto
    });

    // Evento cuando el mouse sale de la imagen
    image.addEventListener('mouseleave', () => {
        textContainer.style.display = 'none';  // Ocultar el texto
    });
});
