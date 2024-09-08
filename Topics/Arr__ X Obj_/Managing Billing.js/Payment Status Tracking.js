/*
Scenario 5: Payment Status Tracking – Object Inside Array for Payment Details
The hospital tracks payments made by patients, including partial and full payments. Each payment status is represented with detailed objects.
*/
// Array of payment details
const paymentRecords = [
    { patient: "Jack", totalBill: 500, amountPaid: 500, status: "Paid in Full" },
    { patient: "Katy", totalBill: 400, amountPaid: 200, status: "Partial Payment" },
    { patient: "Liam", totalBill: 700, amountPaid: 0, status: "Pending Payment" }
];

// Displaying payment status
paymentRecords.forEach(payment => {
    if (payment.status === "Paid in Full") {
        console.log(`${payment.patient} has paid the full amount of $${payment.amountPaid}.`);
    } else if (payment.status === "Partial Payment") {
        console.log(`${payment.patient} has made a partial payment of $${payment.amountPaid}. Remaining: $${payment.totalBill - payment.amountPaid}.`);
    } else {
        console.log(`${payment.patient} has not made any payment. Total due: $${payment.totalBill}.`);
    }
});
// Output:
// Jack has paid the full amount of $500.
// Katy has made a partial payment of $200. Remaining: $200.
// Liam has not made any payment. Total due: $700.
