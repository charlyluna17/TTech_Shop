document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch(searchInput.value.trim());
    });
    
    // Opcional: Buscar mientras se escribe (con debounce)
    searchInput.addEventListener('input', debounce(function() {
        performSearch(this.value.trim());
    }, 300));
});

function performSearch(query) {
    const currentPage = window.location.pathname.split('/').pop();
    const resultsContainer = document.getElementById('search-results') || 
                           document.getElementById('productos-categoria') || 
                           document.querySelector('main');

    if (!query) {
        switch(currentPage) {
            case 'categorias.html':
                // Recargar productos de la categoría actual
                const categoria = getCategoriaFromUrl();
                if (categoria) loadProductsByCategory();
                break;
                
            case 'home.html':
                // Mostrar productos destacados
                displayFeaturedProducts();
                break;
                
            default:
                // No hacer nada en otras páginas
                return;
        }
        return;
    }

    // Resto de la lógica de búsqueda...
    const normalizedQuery = query.toLowerCase()
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "");
    
    const resultados = window.productos.filter(producto => {
        const nombreNormalizado = producto.nombre.toLowerCase()
                                            .normalize("NFD")
                                            .replace(/[\u0300-\u036f]/g, "");
        
        const categoriaNormalizada = producto.categoria.toLowerCase()
                                                .normalize("NFD")
                                                .replace(/[\u0300-\u036f]/g, "");
        
        return nombreNormalizado.includes(normalizedQuery) || 
               categoriaNormalizada.includes(normalizedQuery);
    });

    displaySearchResults(resultados);
}

function displaySearchResults(resultados) {
    const mainContent = document.querySelector('main');
    
    if (!resultados || resultados.length === 0) {
        mainContent.innerHTML = `
            <div class="container my-5">
                <div class="alert alert-info">
                    <h4 class="alert-heading">No se encontraron resultados</h4>
                    <p>No hay productos que coincidan con tu búsqueda.</p>
                    <hr>
                    <a href="home.html" class="btn btn-outline-info">Volver al inicio</a>
                </div>
            </div>
        `;
        return;
    }

    // Mostrar resultados en formato de grilla similar a categorías
    mainContent.innerHTML = `
        <section class="container my-5">
            <h2 class="mb-4">Resultados de búsqueda</h2>
            <div class="row g-4" id="search-results">
                ${resultados.map(producto => {
                    // Construir ruta de imagen correctamente
                    let imagenPath = producto.imagenes[0];
                    
                    // Si la imagen no incluye la ruta base, agregarla
                    if (!imagenPath.includes('img/productos/')) {
                        imagenPath = `img/productos/${imagenPath}`;
                    }
                    
                    return `
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="card h-100 border-0 shadow-sm">
                            <img src="${imagenPath}" 
                                 class="card-img-top p-3" 
                                 alt="${producto.nombre}"
                                 style="height: 180px; object-fit: contain;"
                                 onerror="this.src='img/placeholder.jpg'">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="text-danger fw-bold">$${producto.precio.toFixed(2)}</p>
                                <span class="badge bg-secondary">${producto.categoria}</span>
                            </div>
                            <div class="card-footer bg-white border-0">
                                <a href="producto.html?id=${producto.id}" class="btn btn-outline-primary w-100">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </section>
    `;
}

// Función debounce para mejorar rendimiento en búsquedas mientras se escribe
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}