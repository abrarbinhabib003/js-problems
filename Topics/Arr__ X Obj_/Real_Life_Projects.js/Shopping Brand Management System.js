/*
/////////////////////////////////////////////////////////////////////////////////

Shopping brands manage their inventory, sales, and customer interactions using arrays of objects.

Scenario: Inventory and Sales Tracking
Inventory is managed with an array of product objects, and sales records are stored with detailed sales information.
///////////////////////////////////////////////////////////////////////////////
*/

// Array of inventory objects
const inventory = [
    { productId: 101, name: "T-Shirt", price: 20, stock: 100 },
    { productId: 102, name: "Jeans", price: 50, stock: 50 }
];

// Array of sales records
const sales = [
    { saleId: 401, productId: 101, quantity: 3, total: 60 },
    { saleId: 402, productId: 102, quantity: 2, total: 100 }
];

// Display inventory
inventory.forEach(item => {
    console.log(`Product: ${item.name}, Price: $${item.price}, Stock: ${item.stock}`);
});

// Display sales
sales.forEach(sale => {
    console.log(`Sale ID: ${sale.saleId}, Product ID: ${sale.productId}, Total: $${sale.total}`);
});
