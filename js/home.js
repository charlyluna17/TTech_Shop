// js/producto.js

// =============================================
// CONFIGURACIÓN INICIAL (RUTAS Y DATOS GLOBALES)
// =============================================

// Ruta base para imágenes (¡Ajusta según tu estructura de carpetas!)
const BASE_IMAGE_PATH = 'img/productos/'; // Local (sin "/" al inicio)
// Para hosting después, cambia a: '/img/productos/'

// Declarar productos y productosRelacionados en el ámbito global (window)
// para que puedan ser accedidos desde otros scripts.
(function() {
    window.productos = [
        {
            id: 1,
            nombre: "Xiaomi 14 Ultra",
            precio: 1000.00,
            descripcion: "El Xiaomi 14 Ultra 5G cuenta con un potente procesador Qualcomm Snapdragon 8 gen 3...",
            especificaciones: {
                pantalla: "6.7\" AMOLED 120Hz",
                procesador: "Snapdragon 8 Gen 3",
                ram: "8GB",
                almacenamiento: "520GB",
                camara: "Triple 50MP + 48MP + 48MP",
                bateria: "5000mAh",
                os: "Android 13"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}xiaomi14.jpg`,
                `${BASE_IMAGE_PATH}xiaomi14-1.jpg`,
                `${BASE_IMAGE_PATH}xiaomi14-2.jpg`
            ],
            categoria: "telefonos",
            stock: true
        },
        {
            id: 2,
            nombre: "Teclado Redragon",
            precio: 35.00,
            descripcion: "Teclado mecánico RGB con switches Redragon, ideal para gamers.",
            especificaciones: {
                tipo: "Mecánico",
                switches: "Redragon Brown",
                iluminacion: "RGB 16.8M colores",
                conexion: "USB",
                teclas: "104 teclas"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}TecladoRedragon.jpg`,
                `${BASE_IMAGE_PATH}TecladoRedragon-2.jpg`,
                `${BASE_IMAGE_PATH}TecladoRedragon-3.jpg`
            ],
            categoria: "perifericos",
            stock: true
        },
        {
            id: 3,
            nombre: "Samsung S24-Ultra",
            precio: 1200.00,
            descripcion: "Pantalla con resolución 3120 x 1440 (Quad HD+), Tecnología Dynamic AMOLED 2X...",
            especificaciones: {
                pantalla: "172.5mm / 172.2mm, Dynamic AMOLED2X",
                procesador: "Octa-Core, 3.39Ghz",
                ram: "12GB",
                almacenamiento: "994GB",
                camara: "200.0 MP + 50.0 MP + 12.0 MP + 10.0 MP",
                bateria: "5000 MAH",
                os: "Android"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}S24-ultra.jpg`,
                `${BASE_IMAGE_PATH}S24-ultra-2.jpg`,
                `${BASE_IMAGE_PATH}S24-ultra-3.jpg`
            ],
            categoria: "telefonos",
            stock: true
        },
        {
            id: 4,
            nombre: "iPhone 16",
            precio: 1100.00,
            descripcion: "Teléfono inteligente de Apple con chip A18 Bionic y mejoras en la cámara.",
            especificaciones: {
                pantalla: "Super Retina XDR - OLED 2556 x 1179 px",
                procesador: "Chip A18",
                ram: "8GB",
                almacenamiento: "512 GB",
                camara: "Fusión de 48 MP:26mm",
                bateria: "Iones de litio recargable integrada",
                os: "iOS 18"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}iphone16.jpg`,
                `${BASE_IMAGE_PATH}iphone16-2.jpg`,
                `${BASE_IMAGE_PATH}iphone16-3.jpg`
            ],
            categoria: "telefonos",
            stock: true
        },
        {
            id: 5,
            nombre: "Bocina JBL Flip 6",
            precio: 90.00,
            descripcion: "Potente sonido JBL Original Pro Sound con claridad excepcional.",
            especificaciones: {
                dimensiones: "Alto 6.6 x Ancho 17.8 x Profundidad 7.1 cm",
                bateria: "4800 mAh",
                conectividad: "Bluetooth"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}jbl.jpg`,
                `${BASE_IMAGE_PATH}jbl-2.jpg`,
                `${BASE_IMAGE_PATH}jbl-3.jpg`
            ],
            categoria: "audio",
            stock: true
        },
        {
            id: 6,
            nombre: "Pantalla Smart TV - Samsung",
            precio: 239.00,
            descripcion: "Pantalla de 32” Smart con PurColor.",
            especificaciones: {
                tipo: "LED Smart HD",
                resolucion: "1,366 x 768",
                tamaño: "32 Pulgadas"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}smart.jpg`,
                `${BASE_IMAGE_PATH}smart-2.jpg`,
                `${BASE_IMAGE_PATH}smart-3.jpg`
            ],
            categoria: "audio",
            stock: true
        },
        {
            id: 7,
            nombre: "Camara de videovigilancia NEXXT",
            precio: 45.00,
            descripcion: "Cámara Full HD con vista panorámica para interiores.",
            especificaciones: {
                tipo: "NHC-IP20",
                resolucion: "Full HD"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}camara.jpg`,
                `${BASE_IMAGE_PATH}camara2.jpg`,
                `${BASE_IMAGE_PATH}camara3.jpg`
            ],
            categoria: "audio",
            stock: true
        },
        {
            id: 8,
            nombre: "Mouse Logitech g502 Hero",
            precio: 50.00,
            descripcion: "Sensor HERO 25K con seguimiento de precisión submicrométrica.",
            especificaciones: {
                dimensiones: "290mm x 75mm x 40mm",
                resolucion: "100-25.600 dpi"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}mouse.jpg`,
                `${BASE_IMAGE_PATH}mouse2.jpg`,
                `${BASE_IMAGE_PATH}mouse3.jpg`
            ],
            categoria: "perifericos",
            stock: true
        },
        {
            id: 9,
            nombre: "Audifonos JGBL Quantum 100",
            precio: 35.00,
            descripcion: "Audífono gaming Quantum 100 c/cable 3.5 noise isolation passive negro.",
            especificaciones: {
                tipo: "Gaming",
                conectividad: "Cableado"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}audifonos.jpg`,
                `${BASE_IMAGE_PATH}audifonos2.jpg`
            ],
            categoria: "perifericos",
            stock: true
        },
        {
            id: 10,
            nombre: "Laptop hp victus 15-fa0033dx",
            precio: 850.00,
            descripcion: "Procesador Intel Core i5, RAM 8GB, SSD 512GB, RTX3050 4GB.",
            especificaciones: {
                procesador: "Intel Core i5",
                ram: "8gb",
                almacenamiento: "SSD 512gb"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}pc1.jpg`
            ],
            categoria: "computadoras",
            stock: true
        },
        {
            id: 11,
            nombre: "Pc Standard Ryzen",
            precio: 350.00,
            descripcion: "Ryzen 5 5600G, Vega 7, RAM 16GB, M.2 512GB, 500W.",
            especificaciones: {
                procesador: "Ryzen 5 5600g",
                ram: "16gb",
                almacenamiento: "M.2 512gb"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}pc2.jpg`
            ],
            categoria: "computadoras",
            stock: false
        },
        {
            id: 12,
            nombre: "Pc Lian Li Ryzen",
            precio: 2500.00,
            descripcion: "Ryzen 9 7900X, RTX 5070 Ti 16GB, RAM 32GB DDR5, SSD M.2 2TB.",
            especificaciones: {
                procesador: "AMD Ryzen 9 7900x",
                ram: "32gg DDR5",
                almacenamiento: "SSD M.2 2tb"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}pc3.jpg`
            ],
            categoria: "computadoras",
            stock: true
        },
        {
            id: 13,
            nombre: "Play Station 5 Slim",
            precio: 650.00,
            descripcion: "Edición Digital con juego ASTRO BOT incluido.",
            especificaciones: {
                tipo: "Edicion digital",
                almacenamiento: "1tb"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}ps5-1.jpg`,
                `${BASE_IMAGE_PATH}ps5-2.jpg`,
                `${BASE_IMAGE_PATH}ps5-3.jpg`
            ],
            categoria: "consolas",
            stock: true
        },
        {
            id: 14,
            nombre: "Nintendo Switch OLED",
            precio: 420.00,
            descripcion: "Pantalla OLED de 7 pulgadas, 64GB de almacenamiento.",
            especificaciones: {
                tipo: "Black version jpn",
                almacenamiento: "64gb"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}switch1.jpg`,
                `${BASE_IMAGE_PATH}switch2.jpg`,
                `${BASE_IMAGE_PATH}switch3.jpg`
            ],
            categoria: "consolas",
            stock: true
        },
        {
            id: 15,
            nombre: "Contro inalambrico Xbox Series",
            precio: 65.00,
            descripcion: "Control inalambrico xbox series x/s windows ios android robot white",
            especificaciones: {
                tipo: "Serie x/s",
                conectividad: "Windows, ios y android"
            },
            imagenes: [
                `${BASE_IMAGE_PATH}control.jpg`
            ],
            categoria: "consolas",
            stock: true
        }
    ];

    // Productos relacionados por categoría
    window.productosRelacionados = {
        telefonos: [3, 4],
        perifericos: [2, 9, 8],
        audio: [5, 6, 7],
        computadoras: [12, 10, 11],
        consolas: [13, 14, 15]
    };
})();

// =============================================
// FUNCIONES UTILITARIAS COMUNES
// =============================================

// Obtener ID de la URL
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    return !isNaN(id) ? id : null;
}

// Mostrar error si el producto no existe (útil en detalle.html o categorías.html)
function showError(message) {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <div class="container my-5">
                <div class="alert alert-danger">
                    <h4 class="alert-heading">Error</h4>
                    <p>${message}</p>
                    <hr>
                    <a href="home.html" class="btn btn-outline-danger">Volver al inicio</a>
                </div>
            </div>
        `;
    } else {
        console.error("No se encontró el elemento 'main' para mostrar el error.");
    }
}

// Formatear nombres de especificaciones
function formatSpecName(key) {
    const names = {
        pantalla: "Pantalla",
        procesador: "Procesador",
        ram: "RAM",
        almacenamiento: "Almacenamiento",
        camara: "Cámara",
        bateria: "Batería",
        os: "Sistema operativo",
        tipo: "Tipo",
        switches: "Switches",
        iluminacion: "Iluminación",
        conexion: "Conexión",
        teclas: "Teclas",
        dimensiones: "Dimensiones",
        conectividad: "Conectividad",
        resolucion: "Resolución",
        tamaño: "Tamaño"
    };
    return names[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

// Cambiar imagen principal al hacer clic en miniatura (útil en detalle.html)
function changeMainImage(src) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = src;
        mainImage.onerror = () => {
            mainImage.src = `${BASE_IMAGE_PATH}placeholder.jpg`; // Fallback
        };
    }
}

// =============================================
// FUNCIONES DEL CARRITO (pueden ir aquí o en un archivo 'cart.js')
// =============================================

// Función helper para obtener el producto actual del DOM (útil para "Comprar ahora" y "Añadir al carrito" en detalle.html)
function getCurrentProductForCart() {
    const productId = getProductId();
    if (!productId) return null;
    
    const producto = window.productos.find(p => p.id === productId);
    if (!producto) return null;
    
    // Asumiendo que 'product-quantity' existe en producto.html
    const quantityElement = document.getElementById('product-quantity');
    return {
        id: producto.id,
        name: producto.nombre,
        price: producto.precio,
        image: producto.imagenes?.[0] || `${BASE_IMAGE_PATH}placeholder.jpg`,
        // La descripción es opcional en el objeto del carrito, puedes omitirla si no la necesitas allí
        quantity: quantityElement ? parseInt(quantityElement.value) : 1 
    };
}

// Añadir un producto al carrito (actualiza localStorage)
// Esta función es llamada desde 'home.js' (si añades botón) y 'detail.js'
function addToCart(productToAdd) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += productToAdd.quantity || 1;
    } else {
        cart.push({ ...productToAdd, quantity: productToAdd.quantity || 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Aquí puedes llamar a una función global para actualizar el contador del carrito en la navbar
    // Por ejemplo, si tienes una función 'updateCartIconCount' en 'script.js'
    if (typeof updateCartIconCount === 'function') {
        updateCartIconCount();
    }
    // También puedes mostrar una notificación
    // if (typeof showNotification === 'function') {
    //     showNotification(`${productToAdd.name} añadido al carrito`);
    // } else {
        alert(`${productToAdd.name} añadido al carrito`); // Fallback simple
    // }
}


// Redirigir y comprar ahora (usualmente desde detalle.html)
function buyNow() {
    const producto = getCurrentProductForCart();
    if (!producto) return;
    
    localStorage.setItem('cart', JSON.stringify([producto])); // Limpiar y añadir solo este
    
    // Actualizar el contador (si tienes la función global)
    if (typeof updateCartIconCount === 'function') {
        updateCartIconCount();
    }
    
    window.location.href = 'carrito.html'; // Redirigir
}


// Función para actualizar la cantidad en el input de cantidad (solo para detalle.html)
function updateQuantity(change) {
    const input = document.getElementById('product-quantity');
    if (input) {
        let value = parseInt(input.value) + change;
        input.value = Math.max(1, value); // Asegura que no sea menor que 1
    }
}

// Si necesitas un contador de carrito global en la navbar
// Esta función debería estar en tu js/script.js o un js/cart.js dedicado
/*
function updateCartIconCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartIcon = document.getElementById('cart-count-badge'); // Asume que tienes un span con este ID cerca de tu icono de carrito
    if (cartIcon) {
        cartIcon.textContent = totalItems;
        cartIcon.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}
*/

// js/home.js

// Asegúrate de que window.productos esté cargado desde producto.js
// ya que este script se ejecutará después de producto.js en el HTML.

// =============================================
// LÓGICA PARA GENERAR CARDS EN LA PÁGINA DE INICIO (index.html)
// =============================================

// Función para crear un card de producto para la página de inicio
function createHomeProductCard(product) {
    // Asegúrate de que BASE_IMAGE_PATH esté disponible, viene de producto.js
    const imagePath = typeof BASE_IMAGE_PATH !== 'undefined' ? BASE_IMAGE_PATH : 'img/productos/';

    const colDiv = document.createElement('div');
    colDiv.classList.add('col'); // Bootstrap column

    colDiv.innerHTML = `
        <div class="card h-100 shadow-sm border-0">
            <img src="${product.imagenes[0] || `${imagePath}placeholder.jpg`}" 
                 class="card-img-top mx-auto d-block mt-3" 
                 alt="${product.nombre}" 
                 style="max-width: 150px; height: auto;"
                 onerror="this.src='${imagePath}placeholder.jpg'">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title text-center">${product.nombre}</h5>
                <p class="card-text text-center text-danger fw-bold">$${product.precio.toFixed(2)}</p>
                <div class="text-center mb-3">
                    <span class="badge text-bg-secondary">${product.categoria}</span>
                </div>
                <div class="mt-auto text-center">
                    <a href="producto.html?id=${product.id}" class="btn btn-outline-primary btn-sm">Ver detalles</a>
                </div>
            </div>
        </div>
    `;

    return colDiv;
}

// Función para cargar los cards en el contenedor
function loadProductsIntoHomePage() {
    const productsContainer = document.getElementById('products-container');

    // Solo si estamos en home.html (o index.html) y el contenedor existe
    if (productsContainer && typeof window.productos !== 'undefined') {
        // Limpiar el contenedor antes de añadir nuevos cards (útil si se llama varias veces)
        productsContainer.innerHTML = ''; 
        window.productos.forEach(product => {
            const card = createHomeProductCard(product);
            productsContainer.appendChild(card);
        });
    } else {
        console.warn("Contenedor de productos no encontrado o productos no cargados en la página de inicio.");
    }
}

// Ejecutar funciones al cargar el DOM ESPECÍFICAMENTE para la página de inicio
document.addEventListener('DOMContentLoaded', () => {
    loadProductsIntoHomePage();
});


// Función de ejemplo para los botones de la navbar (si no la tienes en otro script, como script.js)
function Click() {
    alert('Funcionalidad de botón no implementada aún.');
}