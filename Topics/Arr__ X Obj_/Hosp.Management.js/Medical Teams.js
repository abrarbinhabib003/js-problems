/*
Scenario 2: Medical Teams – Array of Doctor Objects with Nested Information
The hospital has various medical teams. Each team consists of doctors with specific roles, represented by objects within an array.
*/
// Array of doctor objects with nested specialties
const medicalTeam = [
    { name: "Dr. Smith", specialty: "Cardiology", experience: 15 },
    { name: "Dr. Brown", specialty: "Orthopedics", experience: 10 },
    { name: "Dr. Lee", specialty: "Neurology", experience: 12 }
];

// Displaying doctors' details
medicalTeam.forEach(doctor => {
    console.log(`${doctor.name}, Specialty: ${doctor.specialty}, Experience: ${doctor.experience} years`);
});
// Output:
// Dr. Smith, Specialty: Cardiology, Experience: 15 years
// Dr. Brown, Specialty: Orthopedics, Experience: 10 years
// Dr. Lee, Specialty: Neurology, Experience: 12 years
