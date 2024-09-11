let cart = [];

function addToCart(productName, productPrice) {
    const item = { name: productName, price: productPrice };
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const cartCount = document.getElementById('cart-count');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPriceElement.textContent = `Total: $${total}`;
    cartCount.textContent = cart.length;
}
