/*
Scenario 4: Handling Discounts and Additional Charges
The hospital applies special discounts or additional charges (like late fees or equipment usage) dynamically, stored as objects within billing arrays.
*/
// Array with additional charges and discounts
const billAdjustments = [
    {
        patient: "Henry",
        services: [
            { description: "Consultation", cost: 100 },
            { description: "Ultrasound", cost: 200 }
        ],
        discounts: { description: "Senior Discount", amount: 30 },
        additionalCharges: { description: "Late Fee", amount: 20 }
    },
    {
        patient: "Ivy",
        services: [
            { description: "Vaccination", cost: 50 },
            { description: "Blood Work", cost: 70 }
        ],
        discounts: { description: "New Patient Discount", amount: 10 },
        additionalCharges: { description: "Emergency Service", amount: 100 }
    }
];

// Calculating final amount after discounts and charges
billAdjustments.forEach(bill => {
    let totalCost = bill.services.reduce((acc, service) => acc + service.cost, 0);
    const finalAmount = totalCost - bill.discounts.amount + bill.additionalCharges.amount;
    
    console.log(`Patient: ${bill.patient}`);
    console.log(`Total Cost: $${totalCost}`);
    console.log(`Discount: ${bill.discounts.description}, Amount: -$${bill.discounts.amount}`);
    console.log(`Additional Charges: ${bill.additionalCharges.description}, Amount: +$${bill.additionalCharges.amount}`);
    console.log(`Final Amount Due: $${finalAmount}\n`);
});
// Output:
// Patient: Henry
// Total Cost: $300
// Discount: Senior Discount, Amount: -$30
// Additional Charges: Late Fee, Amount: +$20
// Final Amount Due: $290

// Patient: Ivy
// Total Cost: $120
// Discount: New Patient Discount, Amount: -$10
// Additional Charges: Emergency Service, Amount: +$100
// Final Amount Due: $210
