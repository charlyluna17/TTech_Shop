// categorias.js - Versión corregida
document.addEventListener('DOMContentLoaded', function() {
    // Verificar que los productos están disponibles
    if (!window.productos || window.productos.length === 0) {
        console.error('Error: Array de productos no cargado');
        showError("Error al cargar los productos");
        return;
    }

    const categoria = getCategoriaFromUrl();
    
    if (!categoria) {
        window.location.href = "home.html";
        return;
    }

    // Normalizar nombres de categoría
    const categoriaNormalizada = categoria.toLowerCase().trim();
    
    // Mapeo de nombres de categoría para coincidir con el dropdown
    const categoriasMap = {
        'telefonos': 'telefonos',
        'audio': 'audio',
        'perifericos': 'perifericos',
        'computadoras': 'computadoras',
        'consolas': 'consolas'
    };

    const categoriaReal = categoriasMap[categoriaNormalizada];
    
    if (!categoriaReal) {
        showError("Categoría no válida");
        return;
    }

    // Mostrar título
    const categoriasNombres = {
        telefonos: "Teléfonos",
        audio: "Audio y Video",
        perifericos: "Periféricos",
        computadoras: "Computadoras",
        consolas: "Consolas"
    };
    
    document.getElementById('categoria-titulo').textContent = categoriasNombres[categoriaReal] || categoriaReal;
    
    // Filtrar productos
    const productosFiltrados = window.productos.filter(p => 
        p.categoria && p.categoria.toLowerCase() === categoriaReal
    );

    showProducts(productosFiltrados);
});

function showProducts(productos) {
    const container = document.getElementById('productos-categoria');
    const emptyMsg = document.getElementById('sin-productos');
    
    if (!productos || productos.length === 0) {
        container.innerHTML = '';
        emptyMsg.style.display = 'block';
        return;
    }

    container.innerHTML = productos.map(producto => `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="card h-100 border-0 shadow-sm">
                <img src="img/productos/${producto.imagenes[0]}" 
                     class="card-img-top p-3" 
                     alt="${producto.nombre}" 
                     style="height: 200px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="text-danger fw-bold">$${producto.precio.toFixed(2)}</p>
                    <p class="card-text text-muted small">${producto.descripcion.substring(0, 100)}...</p>
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
    
    emptyMsg.style.display = 'none';
}

function showError(message) {
    document.getElementById('productos-categoria').innerHTML = '';
    document.getElementById('sin-productos').innerHTML = `
        <div class="alert alert-danger">
            <h4 class="alert-heading">Error</h4>
            <p>${message}</p>
            <hr>
            <a href="home.html" class="btn btn-outline-danger">Volver al inicio</a>
        </div>
    `;
    document.getElementById('sin-productos').style.display = 'block';
}

function getCategoriaFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat');
}
