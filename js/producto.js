// =============================================
// CONFIGURACIÓN INICIAL (RUTAS Y DATOS)
// =============================================

// Ruta base para imágenes (¡Ajusta según tu estructura de carpetas!)
const BASE_IMAGE_PATH = 'img/productos/'; // Local (sin "/" al inicio)
// Para hosting después, cambia a: '/img/productos/'

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
        nombre: "Control inalambrico Xbox Series",
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
// FUNCIONES PRINCIPALES
// =============================================

// Obtener ID de la URL
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    return !isNaN(id) ? id : null;
}

// Mostrar error si el producto no existe
function showError(message) {
  const main = document.querySelector('main');
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

// Cambiar imagen principal al hacer clic en miniatura
function changeMainImage(src) {
  const mainImage = document.getElementById('main-product-image');
  mainImage.src = src;
  mainImage.onerror = () => {
    mainImage.src = 'img/placeholder.jpg'; // Fallback local
  };
}

// Renderizar producto en la página
function renderProduct(producto) {
  // Datos básicos
  document.title = `${producto.nombre} | TTech Store`;
  document.getElementById('product-name').textContent = producto.nombre;
  document.getElementById('product-price').textContent = `$${producto.precio.toFixed(2)}`;
  document.getElementById('product-description').textContent = producto.descripcion;
  
  // Estado de stock
  const stockBadge = document.getElementById('stock-badge');
  stockBadge.textContent = producto.stock ? 'En stock' : 'Agotado';
  stockBadge.className = producto.stock ? 'badge bg-success' : 'badge bg-secondary';

  // Imágenes
  const mainImage = document.getElementById('main-product-image');
  const thumbnailsContainer = document.getElementById('product-thumbnails');
  
  if (producto.imagenes && producto.imagenes.length > 0) {
    // Imagen principal con manejo de error
    mainImage.src = producto.imagenes[0];
    mainImage.onerror = () => {
      mainImage.src = 'img/placeholder.jpg';
    };

    // Miniaturas
    thumbnailsContainer.innerHTML = producto.imagenes.map((img, index) => `
      <img src="${img}" 
           alt="Vista ${index + 1} de ${producto.nombre}" 
           class="img-thumbnail cursor-pointer"
           style="width: 80px; height: 80px; object-fit: cover;"
           onclick="changeMainImage('${img}')">
    `).join('');
  } else {
    // Si no hay imágenes, mostrar placeholder
    mainImage.src = 'img/placeholder.jpg';
    thumbnailsContainer.innerHTML = '';
  }

  // Especificaciones
  if (producto.especificaciones) {
    const specsContainer = document.getElementById('product-specs');
    specsContainer.innerHTML = Object.entries(producto.especificaciones)
      .map(([key, value]) => `
        <li class="list-group-item d-flex justify-content-between">
          <span>${formatSpecName(key)}</span>
          <span class="text-muted">${value}</span>
        </li>
      `).join('');
  }

  // Deshabilitar botones si no hay stock
  if (!producto.stock) {
    document.querySelectorAll('.product-action-btn').forEach(btn => {
      btn.disabled = true;
      btn.classList.add('disabled');
    });
  }
}

// Cargar productos relacionados
function loadRelatedProducts(productoActual) {
  let relatedProducts = [];
  const relatedIds = window.productosRelacionados[productoActual.categoria] || [];
  
  // Usar IDs predefinidos o filtrar por categoría
  if (relatedIds.length > 0) {
    relatedProducts = window.productos.filter(p => 
      relatedIds.includes(p.id) && p.id !== productoActual.id
    );
  }
  
  // Completar con otros de la misma categoría si es necesario
  if (relatedProducts.length < 4) {
    const adicionales = window.productos.filter(p => 
      p.categoria === productoActual.categoria && 
      p.id !== productoActual.id &&
      !relatedProducts.some(rp => rp.id === p.id)
    ).slice(0, 4 - relatedProducts.length);
    
    relatedProducts = [...relatedProducts, ...adicionales];
  }
  
  const container = document.getElementById('related-products');
  container.innerHTML = relatedProducts.length > 0 
    ? relatedProducts.map(producto => `
        <div class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 shadow-sm product-card">
            <img src="${producto.imagenes[0] || 'img/placeholder.jpg'}" 
                 class="card-img-top p-3" 
                 alt="${producto.nombre}"
                 style="height: 180px; object-fit: contain;"
                 onerror="this.src='img/placeholder.jpg'">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="text-danger fw-bold">$${producto.precio.toFixed(2)}</p>
              <div class="d-flex justify-content-between align-items-center">
                ${producto.stock ? '<span class="badge bg-success">En stock</span>' : '<span class="badge bg-secondary">Agotado</span>'}
              </div>
            </div>
            <div class="card-footer bg-white border-0">
              <a href="producto.html?id=${producto.id}" class="btn btn-outline-primary w-100">Ver detalles</a>
            </div>
          </div>
        </div>
      `).join('')
    : '<p class="text-muted">No hay productos relacionados disponibles.</p>';
}





// ===== CARRITO =====
if (!localStorage.getItem('carrito')) {
    localStorage.setItem('carrito', JSON.stringify([]));
}

function agregarAlCarrito(idProducto, cantidad = 1) {
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    const productoExistente = carrito.find(item => item.id === idProducto);
    
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        const producto = window.productos.find(p => p.id === idProducto);
        if (producto) {
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagenes[0],
                cantidad: cantidad
            });
        }
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito'));
}

function vaciarCarrito() {
    localStorage.setItem('carrito', JSON.stringify([]));
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    document.querySelectorAll('.contador-carrito').forEach(el => {
        el.textContent = totalItems > 0 ? totalItems : '';
    });
}

// Actualizar contador al cargar la página
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);

function addToCartHandler() {
    const productId = getProductId();
    const quantity = parseInt(document.getElementById('product-quantity').value) || 1;
    
    if (productId) {
        agregarAlCarrito(productId, quantity);
        alert('Producto añadido al carrito');
    }
}

// ===== FUNCIONES PARA LOS BOTONES =====
function buyNow() {
    const productId = getProductId();
    if (!productId) return;
    const quantity = parseInt(document.getElementById('product-quantity').value) || 1;
    
    if (productId) {
        // Crear carrito temporal en sessionStorage
        const producto = window.productos.find(p => p.id === productId);
        if (producto) {
            const carritoExpress = [{
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagenes[0],
                cantidad: quantity
            }];
            
            // Usar sessionStorage para la compra express
            sessionStorage.setItem('compraExpress', JSON.stringify(carritoExpress));
            
            // Redirigir con parámetro especial
            window.location.href = 'carrito.html?express=true';
        }
    } else {
        console.error('ID de producto no encontrado');
    }
}

function addToCartHandler() {
    const productId = getProductId();
    const quantity = parseInt(document.getElementById('product-quantity').value) || 1;
    
    if (productId) {
        agregarAlCarrito(productId, quantity);
        
        // Mostrar notificación
        const notification = document.createElement('div');
        notification.className = 'position-fixed bottom-0 end-0 p-3';
        notification.style.zIndex = '11';
        notification.innerHTML = `
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header bg-success text-white">
                    <strong class="me-auto">¡Producto añadido!</strong>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    El producto se ha añadido al carrito.
                </div>
            </div>
        `;
        document.body.appendChild(notification);
        
        // Eliminar la notificación después de 3 segundos
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

function updateQuantity(change) {
    const quantityInput = document.getElementById('product-quantity');
    let newValue = parseInt(quantityInput.value) + change;
    if (newValue < 1) newValue = 1;
    quantityInput.value = newValue;
}

function irAlCarrito() {
    // Forzar la actualización del contador antes de redirigir
    actualizarContadorCarrito();
    setTimeout(() => {
        window.location.href = 'carrito.html';
    }, 50);
}

// =============================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// =============================================
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar carrito
  if (!localStorage.getItem('carrito')) {
    localStorage.setItem('carrito', JSON.stringify([]));
  }
  
  // Cargar datos del producto solo si estamos en producto.html
  if (window.location.pathname.includes('producto.html')) {
    const productId = getProductId();
    
    if (!productId) {
      showError("Producto no especificado");
      return;
    }

    const producto = window.productos.find(p => p.id === productId);
    
    if (!producto) {
      showError("Producto no encontrado");
      return;
    }

    renderProduct(producto);
    loadRelatedProducts(producto);
  }
  
  // Actualizar contador del carrito en todas las páginas
  actualizarContadorCarrito();
});

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification-toast ${type}`;
  notification.innerHTML = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}