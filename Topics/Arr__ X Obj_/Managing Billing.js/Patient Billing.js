/*
Scenario 1: Patient Billing – Array of Billing Objects
The hospital needs to keep track of bills for each patient. Each bill is represented as an object within an array, containing details like patient name, services, and total amount.
*/
// Array of billing objects
const bills = [
    { 
        patient: "Alice", 
        services: [
            { description: "Consultation", cost: 50 },
            { description: "X-Ray", cost: 100 }
        ],
        insuranceCoverage: 50 // 50% covered by insurance
    },
    { 
        patient: "Bob", 
        services: [
            { description: "Surgery", cost: 2000 },
            { description: "Medication", cost: 150 }
        ],
        insuranceCoverage: 80 // 80% covered by insurance
    }
];

// Function to calculate total bill for each patient
bills.forEach(bill => {
    let totalCost = 0;
    bill.services.forEach(service => {
        totalCost += service.cost;
    });
    
    // Calculating final amount after insurance coverage
    const discount = (totalCost * bill.insuranceCoverage) / 100;
    const finalAmount = totalCost - discount;
    
    console.log(`Patient: ${bill.patient}, Total Cost: $${totalCost}, Final Amount after Insurance: $${finalAmount}`);
});
// Output:
// Patient: Alice, Total Cost: $150, Final Amount after Insurance: $75
// Patient: Bob, Total Cost: $2150, Final Amount after Insurance: $430
