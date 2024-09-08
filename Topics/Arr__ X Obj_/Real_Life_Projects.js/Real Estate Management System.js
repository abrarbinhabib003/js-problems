/*
/////////////////////////////////////////////////////////////////////////////////

Real estate management involves managing properties, agents, and transactions using structured data.

Scenario: Property Listings and Transactions
Properties are stored in an array of objects, and transactions are tracked using a combination of property and client data.

/////////////////////////////////////////////////////////////////////////////////
*/
// Array of property objects
const properties = [
    { id: 1, type: "Apartment", location: "Downtown", price: 300000, agent: "John Doe" },
    { id: 2, type: "House", location: "Suburbs", price: 500000, agent: "Jane Smith" }
];

// Array of transaction objects
const transactions = [
    { transactionId: 201, propertyId: 1, buyer: "Alice", price: 295000, status: "Completed" },
    { transactionId: 202, propertyId: 2, buyer: "Bob", price: 480000, status: "Pending" }
];

// Display properties
properties.forEach(property => {
    console.log(`Property: ${property.type}, Location: ${property.location}, Price: $${property.price}`);
});

// Display transactions
transactions.forEach(transaction => {
    console.log(`Transaction ID: ${transaction.transactionId}, Buyer: ${transaction.buyer}, Status: ${transaction.status}`);
});
