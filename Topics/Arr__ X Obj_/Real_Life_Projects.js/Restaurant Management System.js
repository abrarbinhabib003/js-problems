/*
///////////////////////////////////////////////////////////////////////////////

Restaurants use arrays and objects to manage menus, orders, tables, and staff.

Scenario: Menu and Order Management
The menu is stored as an array of objects, and orders are tracked using a list of order objects with nested item details.

///////////////////////////////////////////////////////////////////////////////
*/

// Array of menu items
const menu = [
    { itemId: 1, name: "Burger", price: 8, category: "Main Course" },
    { itemId: 2, name: "Salad", price: 5, category: "Appetizer" }
];

// Array of order objects
const orders = [
    { orderId: 301, table: 5, items: [{ itemId: 1, quantity: 2 }], total: 16 },
    { orderId: 302, table: 3, items: [{ itemId: 2, quantity: 1 }], total: 5 }
];

// Display menu items
menu.forEach(item => {
    console.log(`Menu Item: ${item.name}, Price: $${item.price}`);
});

// Display order details
orders.forEach(order => {
    console.log(`Order ID: ${order.orderId}, Table: ${order.table}, Total: $${order.total}`);
});
