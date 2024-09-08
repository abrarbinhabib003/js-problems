/*
Scenario 2: Detailed Billing Report – Nested Objects in an Array
The hospital generates detailed billing reports for patients, showing each service’s details, applied insurance, and the final amount.
*/
// Array with nested billing details
const detailedBills = [
    {
        patient: "Charlie",
        services: [
            { description: "Emergency Room", cost: 300 },
            { description: "CT Scan", cost: 500 }
        ],
        insurance: {
            provider: "HealthCarePlus",
            coveragePercentage: 60
        }
    },
    {
        patient: "David",
        services: [
            { description: "Therapy Session", cost: 200 },
            { description: "Blood Test", cost: 80 }
        ],
        insurance: {
            provider: "LifeShield",
            coveragePercentage: 70
        }
    }
];

// Function to print billing report
detailedBills.forEach(bill => {
    console.log(`Billing Report for ${bill.patient}`);
    let totalCost = 0;
    
    bill.services.forEach(service => {
        console.log(`- Service: ${service.description}, Cost: $${service.cost}`);
        totalCost += service.cost;
    });
    
    const discount = (totalCost * bill.insurance.coveragePercentage) / 100;
    const finalAmount = totalCost - discount;
    
    console.log(`Insurance Provider: ${bill.insurance.provider}, Coverage: ${bill.insurance.coveragePercentage}%`);
    console.log(`Total Cost: $${totalCost}, Final Amount: $${finalAmount}\n`);
});
// Output:
// Billing Report for Charlie
// - Service: Emergency Room, Cost: $300
// - Service: CT Scan, Cost: $500
// Insurance Provider: HealthCarePlus, Coverage: 60%
// Total Cost: $800, Final Amount: $320

// Billing Report for David
// - Service: Therapy Session, Cost: $200
// - Service: Blood Test, Cost: $80
// Insurance Provider: LifeShield, Coverage: 70%
// Total Cost: $280, Final Amount: $84
