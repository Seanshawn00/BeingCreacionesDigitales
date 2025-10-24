// Este archivo gestiona la funcionalidad del carrito de compras, permitiendo a los usuarios agregar y eliminar productos.

let cart = [];

// Función para agregar un producto al carrito
function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    updateCartDisplay();
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'cart-item';
        productElement.innerHTML = `
            <h4>${product.name}</h4>
            <p>Precio: $${product.price}</p>
            <button onclick="removeFromCart(${product.id})">Eliminar</button>
        `;
        cartContainer.appendChild(productElement);
    });

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    const totalElement = document.createElement('div');
    totalElement.className = 'cart-total';
    totalElement.innerHTML = `<h4>Total: $${totalPrice}</h4>`;
    cartContainer.appendChild(totalElement);
}

// Exportar funciones para uso en otros módulos
export { addToCart, removeFromCart, updateCartDisplay };