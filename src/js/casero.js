
 document.querySelectorAll('.card-custom').forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });

    const button = card.querySelector('.btn-custom');
    button.addEventListener('click', () => {
        button.textContent = '¡Comprado!';
        button.style.backgroundColor = '#28a745';
        setTimeout(() => {
            button.textContent = 'COMPRA';
            button.style.backgroundColor = '#ff4c4c';
        }, 2000);
    });
});
function  cambiarContenido(id) {
    alert(`¡Gracias por tu interés! Estamos procesando tu compra para ${id}`);
  }