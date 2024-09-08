/*
///////////////////////////////////////////////////////////////////////////////

Managing a restaurant involves handling orders, inventory, and table bookings. We'll demonstrate this with arrays, objects, and functions.

Scenario: Order Management with Bill Calculation
We’ll calculate the total bill for orders, update menu items, and handle payments.




//////////////////////////////////////////////////////////////////////////////////
*/

// Array of menu items
const menu = [
    { itemId: 1, name: "Burger", price: 8, category: "Main Course", stock: 20 },
    { itemId: 2, name: "Salad", price: 5, category: "Appetizer", stock: 15 }
];

// Array of order objects
const orders = [
    { orderId: 301, table: 5, items: [{ itemId: 1, quantity: 2 }], total: 16 }
];

// Function to calculate total bill
function calculateBill(items) {
    let total = 0;
    for (const item of items) {
        const menuItem = menu.find(menuItem => menuItem.itemId === item.itemId);
        if (menuItem) {
            total += menuItem.price * item.quantity;
        }
    }
    return total;
}

// Function to place an order
function placeOrder(table, items) {
    const total = calculateBill(items);
    orders.push({ orderId: Math.floor(Math.random() * 1000), table: table, items: items, total: total });
    console.log(`Order placed for Table ${table}. Total: $${total}`);
}

// Place a new order
placeOrder(3, [{ itemId: 2, quantity: 3 }]);
console.log("Current Orders:", orders);


















