const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");

    menuButton.addEventListener("click", () => {
      menuDropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
      if (
        !menuDropdown.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        menuDropdown.classList.add("hidden");
      }
    });
   
    const comprarProducto = (producto) => {
      alert(`Has agregado ${producto} a tu carrito de compras.`);
  };
    const cambiarContenido= (caja) => {
        const nuevoTitulo = 'Nuevo Título';
        const nuevoTexto = 'Este es el nuevo contenido después de hacer clic en la caja.';

        if(caja === 'caja1') {
            document.getElementById('titulo-caja1').innerText = nuevoTitulo + 'Magnum  Dulce de leche';
            document.getElementById('texto-caja1').innerText = nuevoTexto + ' Específico para Caja 1.';
        } else if(caja === 'caja2') {
            document.getElementById('titulo-caja2').innerText = nuevoTitulo + ' Magnum Black Moccachino';
            document.getElementById('texto-caja2').innerText = nuevoTexto + ' Específico para Caja 2.';
        } else if(caja === 'caja3') {
            document.getElementById('titulo-caja3').innerText = nuevoTitulo + 'Magnum Blanco Almendras';
            document.getElementById('texto-caja3').innerText = nuevoTexto + ' Específico para Caja 3.';
        } else if(caja === 'caja4') {
            document.getElementById('titulo-caja4').innerText = nuevoTitulo + ' Magnum Triple Chocolate';
            document.getElementById('texto-caja4').innerText = nuevoTexto + ' Específico para Caja 4.';
        }
    }
 
