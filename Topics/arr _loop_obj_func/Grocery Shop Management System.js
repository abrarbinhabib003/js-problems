/*
Managing a grocery store involves tracking products, handling customer purchases, and managing inventory. We'll use arrays, loops, objects, and mathematical operations to create a system that manages inventory and processes customer orders.

Scenario: Inventory Management and Customer Billing
We’ll create a system where customers can purchase items, the system will calculate the total bill, and the inventory will be updated accordingly.
*/

// Array of product objects representing the inventory
const inventory = [
    { id: 1, name: "Apple", price: 1.5, stock: 100 },
    { id: 2, name: "Bread", price: 2, stock: 50 },
    { id: 3, name: "Milk", price: 1, stock: 80 }
];

// Function to find a product by ID
function findProductById(id) {
    return inventory.find(product => product.id === id);
}

// Function to process a purchase
function processPurchase(cartItems) {
    let total = 0;
    for (const item of cartItems) {
        const product = findProductById(item.productId);
        if (product && product.stock >= item.quantity) {
            total += product.price * item.quantity;
            product.stock -= item.quantity; // Update stock
        } else {
            console.log(`Insufficient stock for ${product.name}`);
        }
    }
    return total;
}

// Customer cart with product purchases
const customerCart = [
    { productId: 1, quantity: 5 },  // 5 Apples
    { productId: 2, quantity: 2 }   // 2 Breads
];

// Process the purchase and display the total
const totalBill = processPurchase(customerCart);
console.log(`Total Bill: $${totalBill}`);
console.log("Updated Inventory:", inventory);
