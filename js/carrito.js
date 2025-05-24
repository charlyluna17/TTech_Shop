document.addEventListener('DOMContentLoaded', function() {
    // Verificar si es una compra express
    const params = new URLSearchParams(window.location.search);
    const isExpress = params.get('express') === 'true';
    
    if (isExpress) {
        try {
            // Obtener el carrito express de sessionStorage (con manejo de error)
            const carritoExpress = JSON.parse(sessionStorage.getItem('compraExpress') || '[]');
            
            // Validar que sea un array y tenga contenido
            if (Array.isArray(carritoExpress) && carritoExpress.length > 0) {
                localStorage.setItem('carrito', JSON.stringify(carritoExpress));
                sessionStorage.removeItem('compraExpress');
                
                // Actualizar URL para eliminar el parámetro express
                history.replaceState(null, '', 'carrito.html');
            }
        } catch (error) {
            console.error('Error procesando compra express:', error);
        }
    }
    
    // Cargar y mostrar el carrito
    cargarCarrito();
    
    // Configurar evento del botón de finalizar compra
    const finalizarBtn = document.getElementById('finalizar-compra');
    if (finalizarBtn) {
        finalizarBtn.addEventListener('click', finalizarCompra);
    }
});

function cargarCarrito() {
    try {
        const carrito = obtenerCarrito();
        const listaCarrito = document.getElementById('lista-carrito');
        const totalCarrito = document.getElementById('total-carrito');
        
        if (!carrito || carrito.length === 0) {
            if (listaCarrito) {
                listaCarrito.innerHTML = `
                    <div class="alert alert-info">
                        Tu carrito está vacío
                    </div>
                `;
            }
            if (totalCarrito) {
                totalCarrito.textContent = '$0.00';
            }
            return;
        }
        
        if (listaCarrito) {
            listaCarrito.innerHTML = carrito.map((item, index) => {
                const imagen = item.imagen.includes('img/productos/') ? 
                    item.imagen : `img/productos/${item.imagen}`;
                
                return `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="${imagen}" 
                                 class="img-fluid rounded-start p-2" 
                                 alt="${item.nombre}"
                                 style="height: 120px; object-fit: contain;"
                                 onerror="this.src='img/placeholder.jpg'">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">${item.nombre}</h5>
                                <p class="card-text">$${item.precio.toFixed(2)}</p>
                                <div class="d-flex align-items-center">
                                    <button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(${index}, -1)">
                                        <i class="bi bi-dash"></i>
                                    </button>
                                    <span class="mx-2">${item.cantidad}</span>
                                    <button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(${index}, 1)">
                                        <i class="bi bi-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 d-flex align-items-center justify-content-end">
                            <div class="card-body text-end">
                                <h5 class="card-title">$${(item.precio * item.cantidad).toFixed(2)}</h5>
                                <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">
                                    <i class="bi bi-trash"></i> Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        }
        
        // Calcular total
        if (totalCarrito) {
            const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
            totalCarrito.textContent = `$${total.toFixed(2)}`;
        }
    } catch (error) {
        console.error('Error cargando carrito:', error);
        showError("Error al cargar el carrito");
    }
}

function finalizarCompra() {
    try {
        const carrito = obtenerCarrito();
        
        // Verificar si el carrito está vacío
        if (!carrito || carrito.length === 0) {
            alert('Tu carrito está vacío. Agrega productos antes de finalizar la compra.');
            return;
        }
        
        // Mostrar mensaje de confirmación
        const mensaje = document.getElementById('mensaje-compra');
        if (mensaje) {
            mensaje.style.display = 'block';
            mensaje.innerHTML = `
                <h4 class="alert-heading">¡Compra realizada con éxito!</h4>
                <p>Hemos procesado tu pedido correctamente.</p>
                <hr>
                <p class="mb-0">Número de productos: ${carrito.reduce((sum, item) => sum + item.cantidad, 0)}</p>
                <p class="mb-0">Total: $${carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0).toFixed(2)}</p>
            `;
        }
        
        // Aquí iría la lógica para enviar los datos al servidor
        // enviarCompraAlServidor(carrito);
        
        // Vaciar carrito después de 2 segundos (para que el usuario vea el mensaje)
        setTimeout(() => {
            vaciarCarrito();
            cargarCarrito(); // Esto actualizará la vista automáticamente
            
            // Ocultar el mensaje después de 5 segundos
            if (mensaje) {
                setTimeout(() => {
                    mensaje.style.display = 'none';
                }, 3000);
            }
        }, 2000);
        
    } catch (error) {
        console.error('Error finalizando compra:', error);
        showError("Ocurrió un error al procesar tu compra. Por favor intenta nuevamente.");
        
        // Opcional: Podrías registrar el error en un servicio de monitoreo
        // logErrorToService(error);
    }
}

// Función auxiliar para vaciar el carrito (ya incluida en las modificaciones anteriores)
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    actualizarContadorCarrito(); // Si tienes esta función implementada
}

// Función para mostrar errores
function showError(message) {
    const container = document.getElementById('productos-categoria') || document.querySelector('main');
    if (container) {
        container.innerHTML = `
            <div class="alert alert-danger">
                <h4 class="alert-heading">Error</h4>
                <p>${message}</p>
            </div>
        `;
    }
}


// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    try {
        const carrito = obtenerCarrito();
        if (carrito && carrito.length > index) {
            carrito.splice(index, 1);
            guardarCarrito(carrito);
            cargarCarrito();
        }
    } catch (error) {
        console.error('Error eliminando producto:', error);
        showError("Error al eliminar el producto");
    }
}

// Función para cambiar la cantidad de un producto
function cambiarCantidad(index, cambio) {
    try {
        const carrito = obtenerCarrito();
        if (carrito && carrito.length > index) {
            const nuevaCantidad = carrito[index].cantidad + cambio;
            
            if (nuevaCantidad < 1) {
                eliminarDelCarrito(index);
                return;
            }
            
            carrito[index].cantidad = nuevaCantidad;
            guardarCarrito(carrito);
            cargarCarrito();
        }
    } catch (error) {
        console.error('Error cambiando cantidad:', error);
        showError("Error al actualizar la cantidad");
    }
}

// Función auxiliar para obtener el carrito
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

// Función auxiliar para guardar el carrito
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

console.log('Parámetros URL:', window.location.search);
console.log('Compra express?:', isExpress);
console.log('Carrito temporal:', JSON.parse(sessionStorage.getItem('compraExpress')));
console.log('Carrito actual:', JSON.parse(localStorage.getItem('carrito')));