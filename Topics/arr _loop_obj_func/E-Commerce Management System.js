/*
////////////////////////////////////////////////////////////////////////////////

In an e-commerce management system, we need to handle product listings, customer orders, and inventory updates. Here, we'll use functions, arrays, objects, loops, and mathematical calculations to automate common tasks like calculating totals, updating stock, and managing orders.

Scenario: Order Processing with Inventory Management
We'll create a system where customers can place orders, and the system will automatically update the inventory and calculate the total price of the orders using arrays, objects, and functions.



////////////////////////////////////////////////////////////////////////////////
*/

// Array of product objects representing the inventory
const inventory = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics", stock: 50 },
    { id: 2, name: "Shoes", price: 60, category: "Fashion", stock: 150 },
    { id: 3, name: "Watch", price: 120, category: "Accessories", stock: 30 }
];

// Function to find a product by ID
function findProductById(id) {
    return inventory.find(product => product.id === id);
}

// Function to calculate the total price of an order
function calculateOrderTotal(orderItems) {
    let total = 0;
    for (const item of orderItems) {
        const product = findProductById(item.productId);
        if (product) {
            total += product.price * item.quantity;
        }
    }
    return total;
}

// Function to update inventory after an order is placed
function updateInventory(orderItems) {
    for (const item of orderItems) {
        const product = findProductById(item.productId);
        if (product) {
            product.stock -= item.quantity;
        }
    }
}

// Sample customer order
const customerOrder = {
    orderId: 101,
    customer: "Alice",
    items: [
        { productId: 1, quantity: 2 }, // 2 Laptops
        { productId: 3, quantity: 1 }  // 1 Watch
    ]
};

// Calculate the order total and update inventory
const orderTotal = calculateOrderTotal(customerOrder.items);
updateInventory(customerOrder.items);

console.log(`Order ID: ${customerOrder.orderId}, Customer: ${customerOrder.customer}, Total: $${orderTotal}`);
console.log("Updated Inventory:", inventory);


















