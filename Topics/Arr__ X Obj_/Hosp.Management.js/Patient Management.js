/*
Scenario 1: Patient Management – Array of Patient Objects
The hospital manages a list of patients using an array of objects, where each object represents a patient's profile. This makes it easy to handle multiple patients at once.
*/
// Array of patient objects
const patients = [
    { name: "Alice", age: 30, condition: "Flu", room: 101 },
    { name: "Bob", age: 40, condition: "Broken Arm", room: 102 },
    { name: "Charlie", age: 50, condition: "Migraine", room: 103 }
];

// Displaying each patient's details using for...of loop
for (const patient of patients) {
    console.log(`Patient: ${patient.name}, Age: ${patient.age}, Room: ${patient.room}`);
}
// Output:
// Patient: Alice, Age: 30, Room: 101
// Patient: Bob, Age: 40, Room: 102
// Patient: Charlie, Age: 50, Room: 103
