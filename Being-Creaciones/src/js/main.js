// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Código para inicializar la lógica del sitio
    console.log("Bienvenido a Being Creaciones");

    // Ejemplo de interacción del usuario
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.productId;
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        // Lógica para agregar el producto al carrito
        console.log(`Producto ${productId} agregado al carrito`);
    }
});