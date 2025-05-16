// Base de datos de productos
window.productos = [
    {
        id: 1,
        nombre: "Xiaomi 14 Ultra",
        precio: 1000.00,
        descripcion: "El Xiaomi 14 Ultra 5G cuenta con un potente procesador Qualcomm Snapdragon 8 gen 3, con una velocidad Octa-core (1x3.3 GHz Cortex-X4 & 3x3.2 GHz Cortex-A720 & 2x3.0 GHz Cortex-A720 & 2x2.3 GHz Cortex-A520). Además incorpora un GPU Adreno 750.",
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
            "xiaomi14.jpg",
            "xiaomi14-1.jpg",
            "xiaomi14-2.jpg"
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
            "TecladoRedragon.jpg",
            "TecladoRedragon-2.jpg",
            "TecladoRedragon-3.jpg"
        ],
        categoria: "perifericos",
        stock: true
    },
    {
        id: 3,
        nombre: "Samsung S24-Ultra",
        precio: 1200.00,
        descripcion: "Pantalla con resolución 3120 x 1440 (Quad HD+), Tecnología Dynamic AMOLED 2X, Frecuencia de actualización 120 Hz, Exterior reforzado con titanio",
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
            "S24-ultra.jpg",
            "S24-ultra-2.jpg",
            "S24-ultra-3.jpg"
        ],
        categoria: "telefonos",
        stock: true
    },
    {
        id: 4,
        nombre: "iPhone 16",
        precio: 1100.00,
        descripcion: "Es un teléfono inteligente de decimoctava generación de Apple, con mejoras en hardware y software, incluyendo el nuevo chip A18 Bionic, Apple Intelligence y mejoras en la cámara.",
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
            "iphone16.jpg",
            "iphone16-2.jpg",
            "iphone16-3.jpg"
        ],
        categoria: "telefonos",
        stock: true
    },
    {
        id: 5,
        nombre: "Bocina JBL Flip 6",
        precio: 90.00,
        descripcion: "El nuevo y audaz JBL Flip 6 ofrece un potente sonido JBL Original Pro Sound con una claridad excepcional gracias a su sistema de altavoces de 2 vías.",
        especificaciones: {
            dimensiones: "Alto 6.6 x Ancho 17.8 x Profundidad 7.1 cm",
            bateria: "4800 mAh",
            conectividad: "Bluetooth"
        },
        imagenes: [
            "jbl.jpg",
            "jbl-2.jpg",
            "jbl-3.jpg"
        ],
        categoria: "audio",
        stock: true
    },
    {
        id: 6,
        nombre: "Pantalla Smart TV - Samsung",
        precio: 239.00,
        descripcion: "Pantalla de 32” Smart con PurColor. Permite que el televisor exprese una amplia gama de colores para un rendimiento de imagen óptimo.",
        especificaciones: {
            tipo: "LED Smart HD",
            resolucion: "1,366 x 768",
            tamaño: "32 Pulgadas"
        },
        imagenes: [
            "smart.jpg",
            "smart-2.jpg",
            "smart-3.jpg"
        ],
        categoria: "audio",
        stock: true
    },
    {
        id: 7,
        nombre: "Camara de videovigilancia NEXXT",
        precio: 45.00,
        descripcion: "Cámara de videovigilancia Nexxt NHC-IP20 ofrece monitoreo en resolución Full HD con una vista panorámica ideal para interiores. ",
        especificaciones:{
            tipo: "NHC-IP20",
            resolucion: "Full HD"

        },
        imagenes:[
            "camara.jpg",
            "camara2.jpg",
            "camara3.jpg"
        ],
        categoria: "audio",
        stock: true
    },
    {
        id : 8,
        nombre: "Mouse Logitech g502 Hero",
        precio: 50.00,
        descripcion: "Diseñado para un desempeño avanzado en los juegos. G502 HERO cuenta con un sensor de juegos HERO 25K con seguimiento de precisión submicrométrica, LIGHTSYNC RGB personalizable, perfiles integrados, pesos reposicionables y mucho más.",
        especificaciones:{
            dimensiones:"Altura: 290 mmAncho: 75 mm Profundidad: 40 mmPeso: 121 g, sólo mouse ,Pesa opcional adicional: hasta 18 g (5 x 3.6 g),Longitud del cable: 2,1 m",
            resolucion: "100-25.600 dpi"
        },
        imagenes:[
            "mouse.jpg",
            "mouse2.jpg",
            "mouse3.jpg"
        ],
        categoria:"perifericos",
        stock:true
    },
    {
        id: 9,
        nombre: "Audifonos JGBL Quantum 100",
        precio: 35.00,
        descripcion: "Audífono gaming Quantum 100 c/cable 3.5 noise isolation passive negro",
        especificaciones:{
            tipo: "Gaming",
            conectividad:"Cableado"
        },
        imagenes:[
            "audifonos.jpg",
            "audifonos2.jpg"
        ],
        categoria: "perifericos",
        stock: true
    },
    {
        id: 10,
        nombre: "Laptop hp victus 15-fa0033dx",
        precio: 850.00,
        descripcion: "Laptop hp victus 15-fa0033dx proc. intel core i5 12450h ram 8gb almacenamiento ssd 512gb rtx3050 4gb pantalla ips fhd 144hz w11 kb us 9t9r8ua",
        especificaciones:{
            procesador:"Intel Core i5",
            ram: "8gb",
            almacenamiento: "SSD 512gb"
        },
        imagenes:[
            "pc1.jpg"
        ],
        categoria: "computadoras",
        stock: true
    },
    {
        id : 11,
        nombre: "Pc Standard Ryzen",
        precio: 350.00,
        descripcion: "Pc Standard Ryzen 5 5600G, Vega 7, RAM 16GB, M.2 512GB, 500W",
        especificaciones:{
            procesador: "Ryzen 5 5600g",
            ram: "16gb",
            almacenamiento:"M.2 512gb"
        },
        imagenes:[
            "pc2.jpg"
        ],
        categoria: "computadoras",
        stock: false

    },
    {
        id : 12,
        nombre: "Pc Lian Li Ryzen",
        precio: 2500.00,
        descripcion: "Pc Lian Li Ryzen 9 7900X, RTX 5070 Ti 16GB, RAM 32GB DDR5, SSD M.2 2TB, AIO 360mm, UPS 1200W 80+ GOLD",
        especificaciones:{
            procesador: "AMD Ryzen 9 7900x",
            ram: "32gg DDR5",
            almacenamiento: "SSD M.2 2tb"

        },
        imagenes:[
            "pc3.jpg"
        ],
        categoria:"computadoras",
        stock: true
    },
    {
        id: 13,
        nombre: "Play Station 5 Slim",
        precio: 650.00,
        descripcion: "¡Atención, Gamers de Próxima Generación! ¿Listos para una experiencia de juego que redefine lo que creías posible? Presentamos la PlayStation 5 Slim Edición Digital, la joya compacta que desata un universo de entretenimiento 4K HDR directamente en tu sala y lo mejor aún con el juego canjeable ASTRO BOT.",
        especificaciones:{
            tipo: "Edicion digital",
            almacenamiento:"1tb"
        },
        imagenes:[
            "ps5-1.jpg",
            "ps5-2.jpg",
            "ps5-3.jpg",
        ],
        categoria: "consolas",
        stock: true
    },
    {
        id : 14,
        nombre: "Nintendo Switch OLED",
        precio: 420.00,
        descripcion: "La Nintendo Switch OLED es la consola perfecta para jugadores que buscan una experiencia de juego versátil y de alta calidad. Con su pantalla OLED impresionante, controles Joy-Con flexibles y múltiples modos de juego, la diversión está garantizada en cualquier momento y lugar.",
        especificaciones:{
            tipo: "Black version jpn",
            almacenamiento: "64gb"
        },
        imagenes:[
            "switch1.jpg",
            "switch2.jpg",
            "switch3.jpg"
        ],
        categoria: "consolas",
        stock: true
    },
    {
        id : 15,
        nombre: "Contro inalambrico Xbox Series",
        precio: 65.00,
        descripcion:"Control inalambrico xbox series x/s windows ios android robot white",
        especificaciones:{
            tipo: "Serie x/s",
            conectividad:"Windows, ios y android"
        },
        imagenes:[
            "control.jpg"
        ],
        categoria:"consolas" ,
        stock: true
    }
];

// Productos relacionados por categoría
const productosRelacionados = {
    telefonos: [3, 4],  // IDs de productos relacionados para teléfonos
    perifericos: [2,9,8],     // IDs para periféricos
    audio: [5,6,7],          // IDs para audio
    computadoras: [12,10,11],
    consolas:[13,14,15]

};

// Obtener ID de la URL
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    return !isNaN(id) ? id : null;
}

// Cargar producto al iniciar la página
document.addEventListener('DOMContentLoaded', function() {
    const productId = getProductId();
    
    if(!productId) {
        showError("Producto no especificado");
        return;
    }

    const producto = productos.find(p => p.id === productId);
    
    if(!producto) {
        showError("Producto no encontrado");
        return;
    }

    renderProduct(producto);
    loadRelatedProducts(producto);
});

// Mostrar error
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

// Renderizar producto
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
    
    if(producto.imagenes && producto.imagenes.length > 0) {
         // Limpiar nombres de imágenes (eliminar espacios)
    const imagenesLimpias = producto.imagenes.map(img => img.trim().replace(/\s+/g, '-'));

    // Imagen principal (asegurar ruta correcta)
    const mainImagePath = `img/productos/${imagenesLimpias[0]}`;
    mainImage.src = mainImagePath;
    mainImage.alt = producto.nombre;
    mainImage.onerror = function() {
        this.src = 'img/productos/placeholder.jpg'; // Imagen por defecto si falla
    };

    // Miniaturas
    thumbnailsContainer.innerHTML = imagenesLimpias.map((img, index) => `
        <img src="img/productos/${img}" 
             alt="Vista ${index + 1} de ${producto.nombre}" 
             class="img-thumbnail cursor-pointer"
             style="width: 80px; height: 80px; object-fit: cover;"
             onclick="changeMainImage('img/productos/${img}')">
    `).join('');
} else {
    // Si no hay imágenes, mostrar placeholder
    mainImage.src = 'img/productos/placeholder.jpg';
    thumbnailsContainer.innerHTML = '';
}
    

    // Especificaciones
    if(producto.especificaciones) {
        const specsContainer = document.getElementById('product-specs');
        specsContainer.innerHTML = Object.entries(producto.especificaciones).map(([key, value]) => `
            <li class="list-group-item d-flex justify-content-between">
                <span>${formatSpecName(key)}</span>
                <span class="text-muted">${value}</span>
            </li>
        `).join('');
    }

    // Botones (deshabilitar si no hay stock)
    if(!producto.stock) {
        document.querySelectorAll('.product-action-btn').forEach(btn => {
            btn.disabled = true;
            btn.classList.add('disabled');
        });
    }
}

// Cargar productos relacionados

function loadRelatedProducts(productoActual) {
    // Primero intenta usar la lista predefinida de relacionados
    let relatedProducts = [];
    const relatedIds = productosRelacionados[productoActual.categoria] || [];
    
    // Si hay IDs predefinidos, úsalos
    if (relatedIds.length > 0) {
        relatedProducts = productos.filter(p => 
            relatedIds.includes(p.id) && p.id !== productoActual.id
        );
    } 
    // Si no hay suficientes, completa con otros de la misma categoría
    if (relatedProducts.length < 4) {
        const adicionales = productos.filter(p => 
            p.categoria === productoActual.categoria && 
            p.id !== productoActual.id &&
            !relatedProducts.some(rp => rp.id === p.id)
        ).slice(0, 4 - relatedProducts.length);
        
        relatedProducts = [...relatedProducts, ...adicionales];
    }
    
    const container = document.getElementById('related-products');
    
    if (relatedProducts.length > 0) {
        container.innerHTML = relatedProducts.map(producto => `
            <div class="col-md-6 col-lg-3">
                <div class="card h-100 border-0 shadow-sm product-card">
                    <img src="img/productos/${producto.imagenes[0].trim().replace(/\s+/g, '-')}" 
                         class="card-img-top p-3" 
                         alt="${producto.nombre}"
                         style="height: 180px; object-fit: contain;"
                         onerror="this.src='img/productos/placeholder.jpg'">
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
        `).join('');
    } else {
        container.innerHTML = '<p class="text-muted">No hay productos relacionados disponibles.</p>';
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

// Cambiar imagen principal
function changeMainImage(src) {
    document.getElementById('main-product-image').src = src;
}

// Actualizar cantidad
function updateQuantity(change) {
    const input = document.getElementById('product-quantity');
    let newValue = parseInt(input.value) + change;
    if(newValue < 1) newValue = 1;
    input.value = newValue;
}

// Añadir al carrito
function addToCart() {
    const productId = getProductId();
    const quantity = document.getElementById('product-quantity').value;
    
    // Aquí iría la lógica para añadir al carrito
    console.log(`Añadiendo ${quantity} unidades del producto ${productId} al carrito`);
    alert(`Se añadieron ${quantity} unidades al carrito`);
}

// Comprar ahora
function buyNow() {
    const productId = getProductId();
    const quantity = document.getElementById('product-quantity').value;
    
    // Aquí iría la lógica para comprar directamente
    console.log(`Comprando ${quantity} unidades del producto ${productId}`);
    alert(`Redirigiendo al pago de ${quantity} unidades`);
}
