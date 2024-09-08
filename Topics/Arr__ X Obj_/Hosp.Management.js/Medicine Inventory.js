/*
Scenario 4: Medicine Inventory – Array of Objects for Stock Management
The hospital pharmacy manages its inventory using an array of objects, where each object represents a specific medicine with details such as availability and stock count.
*/
// Array of medicine objects
const pharmacy = [
    { name: "Paracetamol", inStock: true, quantity: 50 },
    { name: "Aspirin", inStock: false, quantity: 0 },
    { name: "Insulin", inStock: true, quantity: 20 }
];

// Checking medicine stock using for...of loop
for (const medicine of pharmacy) {
    if (medicine.inStock && medicine.quantity > 0) {
        console.log(`${medicine.name} is available with ${medicine.quantity} units.`);
    } else {
        console.log(`${medicine.name} is out of stock.`);
    }
}
// Output:
// Paracetamol is available with 50 units.
// Aspirin is out of stock.
// Insulin is available with 20 units.
