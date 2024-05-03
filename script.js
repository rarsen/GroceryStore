function Change(){
    var selectedpage = document.getElementById("select").value;

    if(selectedpage){
        window.location.href = selectedpage;
    }
}

// Sample cart items
const cartItems = [
    { id: 1, name: 'Whole Wheat Bread', size: 'M', price: 9.99, image: 'img/wholewheat.jpeg', quantity: 1 },
    { id: 2, name: 'Product 2', size: 'L', price: 15.00, image: 'https://via.placeholder.com/50', quantity: 1 },
    { id: 3, name: 'Product 3', size: 'S', price: 20.00, image: 'https://via.placeholder.com/50', quantity: 1 }
];

// Render cart items
const cartItemsContainer = document.getElementById('cart-items');
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const totalPrice = item.price * item.quantity;
        const row = `
            <tr>
                <td><img src="${item.image}" alt="${item.name}" id="imagecart"></td>
                <td>${item.name}<br>Size: ${item.size}<br>Price: ${item.price.toFixed(2)} €</td>
                <td class="quantity">
                    <button onclick="decrementQuantity(${item.id})">-</button>
                    <input type="number" value="${item.quantity}" min="1" max="10" onchange="updateQuantity(${item.id}, this.value)">
                    <button onclick="incrementQuantity(${item.id})">+</button>
                </td>
                <td>$${totalPrice.toFixed(2)}</td>
                <td><button class="remove-btn" onclick="removeItem(${item.id})">Remove</button></td>
            </tr>
        `;
        cartItemsContainer.innerHTML += row;
    });
}

// Functions to update quantity
function updateQuantity(itemId, newQuantity) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cartItems[itemIndex].quantity = parseInt(newQuantity);
        renderCartItems();
    }
}

function incrementQuantity(itemId) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cartItems[itemIndex].quantity++;
        renderCartItems();
    }
}

function decrementQuantity(itemId) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1 && cartItems[itemIndex].quantity > 1) {
        cartItems[itemIndex].quantity--;
        renderCartItems();
    }
}

// Function to remove item from cart
function removeItem(itemId) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
        renderCartItems();
    }
}

// Initial rendering
renderCartItems();