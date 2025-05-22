// carrito.js
document.addEventListener('DOMContentLoaded', () => {
    // Añadir producto al carrito (desde producto.html)
    if (document.querySelector('.add-to-cart')) {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const product = {
                    id: e.target.dataset.id,
                    name: e.target.dataset.name,
                    price: parseFloat(e.target.dataset.price),
                    quantity: 1
                };
                addToCart(product);
            });
        });
    }

    // Mostrar carrito (desde carrito.html)
    if (document.getElementById('cart-items')) {
        displayCart();
    }
});

// Función para añadir productos al carrito (localStorage)
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} añadido al carrito!`);
}

// Función para mostrar el carrito en carrito.html
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cartContainer.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Precio: $${item.price}</p>
                <p>Cantidad: ${item.quantity}</p>
                <button class="remove-item" data-id="${item.id}">Eliminar</button>
            </div>
        `).join('');
    }

    // Evento para eliminar items
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            removeFromCart(productId);
        });
    });
}

// Función para eliminar productos del carrito
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Refrescar la vista
}
