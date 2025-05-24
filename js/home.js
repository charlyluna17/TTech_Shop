// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Referencia al contenedor donde se insertarán los productos
    const productsContainer = document.getElementById('products-container');

    // Verificar si window.productos está disponible desde data.js
    if (typeof window.productos !== 'undefined' && Array.isArray(window.productos)) {
        window.productos.forEach(product => {
            // Crea un div para la columna de Bootstrap
            const colDiv = document.createElement('div');
            colDiv.classList.add('col'); // Bootstrap class para las columnas de la cuadrícula

            // Crea la card del producto
            const card = document.createElement('div');
            card.classList.add('product-card'); // Tu clase CSS personalizada

            // Asegúrate de que las imágenes tengan la ruta correcta
            // Usamos product.imagenes[0] para la primera imagen
            const imageUrl = product.imagenes && product.imagenes.length > 0 
                             ? product.imagenes[0] 
                             : 'img/placeholder.jpg'; // Fallback a imagen de placeholder

            card.innerHTML = `
                <img src="${imageUrl}" alt="${product.nombre}" class="product-image" onerror="this.onerror=null; this.src='img/placeholder.jpg';">
                <div class="product-info">
                    <h3 class="product-name">${product.nombre}</h3>
                    <p class="product-price">$${product.precio.toFixed(2)}</p>
                    <p class="product-description">${product.descripcion}</p>
                    <div class="product-badge ${product.stock ? 'in-stock' : 'out-of-stock'}">
                        ${product.stock ? 'En stock' : 'Sin stock'}
                    </div>
                    <button class="btn-details" data-product-id="${product.id}">Ver detalles</button>
                </div>
            `;
            
            // Añade la card dentro del div de la columna
            colDiv.appendChild(card);
            // Añade el div de la columna al contenedor principal
            productsContainer.appendChild(colDiv);
        });

        // Asigna los event listeners a los botones "Ver detalles"
        // Esto se hace DESPUÉS de que todas las cards han sido añadidas al DOM
        const detailButtons = document.querySelectorAll('.btn-details');
        detailButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;
                // Redirige a la página de detalles del producto con el ID en la URL
                window.location.href = `producto.html?id=${productId}`;
            });
        });

    } else {
        console.error("El array 'window.productos' no se encontró o no está definido. Asegúrate de que 'data.js' esté cargado correctamente y defina 'window.productos'.");
    }
});

// Puedes dejar la función Click() aquí si la necesitas, o moverla a otro JS según tu organización.
// function Click() {
//     alert('Funcionalidad de usuario/carrito (No implementada en este demo).');
// }

// Si tu search.js o producto.js necesitan acceder a window.productos,
// asegúrate de que se carguen DESPUÉS de data.js.
// Y si tu search.js va a generar resultados de búsqueda como cards,
// necesitará una lógica similar a la de este script para generar HTML.