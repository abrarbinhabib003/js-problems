/*
/////////////////////////////////////////////////////////////////////////////////
In real estate, managing properties, agents, and transactions efficiently is crucial. Here, we'll use arrays, loops, functions, and mathematical operations to manage real estate transactions.

Scenario: Calculating Commission for Agents
We’ll calculate agent commissions based on property sales, manage properties, and update transactions.



/////////////////////////////////////////////////////////////////////////////////
*/

// Array of property objects
const properties = [
    { id: 1, type: "Apartment", location: "Downtown", price: 300000, agent: "John Doe" },
    { id: 2, type: "House", location: "Suburbs", price: 500000, agent: "Jane Smith" }
];

// Function to calculate the commission based on a percentage
function calculateCommission(price, percentage) {
    return (price * percentage) / 100;
}

// Function to process a property sale and update transactions
function processSale(propertyId, buyer, commissionRate) {
    const property = properties.find(prop => prop.id === propertyId);
    if (!property) {
        console.log("Property not found.");
        return;
    }
    const commission = calculateCommission(property.price, commissionRate);
    const transaction = {
        transactionId: Math.floor(Math.random() * 1000),
        propertyId: property.id,
        buyer: buyer,
        price: property.price,
        commission: commission,
        status: "Completed"
    };
    transactions.push(transaction);
    console.log(`Property sold to ${buyer} for $${property.price}. Agent earned $${commission}.`);
}

// Array to store transactions
const transactions = [];

// Process a sale
processSale(1, "Alice", 3); // 3% commission for the agent

console.log("Transactions:", transactions);

















