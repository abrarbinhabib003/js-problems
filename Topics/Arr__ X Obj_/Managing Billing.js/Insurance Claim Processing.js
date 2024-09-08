/*
Scenario 3: Insurance Claim Processing – Array of Objects with Claim Status
The billing department also handles insurance claims. Each claim is an object within an array, containing the claim status and payment updates.
*/
// Array of insurance claims
const insuranceClaims = [
    { patient: "Emma", service: "Surgery", amountBilled: 3000, claimStatus: "Pending" },
    { patient: "Frank", service: "MRI", amountBilled: 800, claimStatus: "Approved" },
    { patient: "Grace", service: "Lab Tests", amountBilled: 200, claimStatus: "Denied" }
];

// Processing claims based on their status
insuranceClaims.forEach(claim => {
    if (claim.claimStatus === "Approved") {
        console.log(`Claim Approved: ${claim.patient} - ${claim.service}. Amount: $${claim.amountBilled}`);
    } else if (claim.claimStatus === "Pending") {
        console.log(`Claim Pending: ${claim.patient} - ${claim.service}. Follow up required.`);
    } else {
        console.log(`Claim Denied: ${claim.patient} - ${claim.service}. Reason: Check with provider.`);
    }
});
// Output:
// Claim Pending: Emma - Surgery. Follow up required.
// Claim Approved: Frank - MRI. Amount: $800
// Claim Denied: Grace - Lab Tests. Reason: Check with provider.
