/*
//////////////////////////////////////////////////////////////////////////////////

E-commerce platforms require efficient management of products, customers, orders, and inventory, using arrays and objects to organize data.

Scenario: Product Catalog and Orders
Arrays of product objects manage the product catalog, and each order is tracked using an array of order objects.

////////////////////////////////////////////////////////////////////////////////
*/
// Array of product objects
const products = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics", stock: 50 },
    { id: 2, name: "Shoes", price: 60, category: "Fashion", stock: 150 },
    { id: 3, name: "Watch", price: 120, category: "Accessories", stock: 30 }
];

// Array of order objects
const orders = [
    { orderId: 101, customer: "Alice", items: [{ productId: 1, quantity: 2 }], total: 1600 },
    { orderId: 102, customer: "Bob", items: [{ productId: 2, quantity: 1 }, { productId: 3, quantity: 1 }], total: 180 }
];

// Display product details
products.forEach(product => {
    console.log(`Product: ${product.name}, Price: $${product.price}, Stock: ${product.stock}`);
});

// Display order details
orders.forEach(order => {
    console.log(`Order ID: ${order.orderId}, Customer: ${order.customer}, Total: $${order.total}`);
});
