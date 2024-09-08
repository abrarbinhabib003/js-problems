/*
Scenario 3: Emergency Room Management – Array of Object for Emergency Cases
The emergency room needs to handle various cases dynamically, each represented as an object within an array.
*/
// Array of emergency cases
const emergencies = [
    { type: "Cardiac Arrest", priority: "High", room: "ER1" },
    { type: "Fracture", priority: "Medium", room: "ER2" },
    { type: "Burn", priority: "High", room: "ER3" }
];

// Handling emergency cases using a loop and conditions
for (const emergency of emergencies) {
    if (emergency.priority === "High") {
        console.log(`Urgent! ${emergency.type} in ${emergency.room}.`);
    } else {
        console.log(`Handle ${emergency.type} in ${emergency.room} with normal priority.`);
    }
}
// Output:
// Urgent! Cardiac Arrest in ER1.
// Handle Fracture in ER2 with normal priority.
// Urgent! Burn in ER3.
