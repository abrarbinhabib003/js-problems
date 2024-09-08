/*
Scenario 7: Patient’s Medical History – Nested Objects Inside an Array
Each patient has a detailed medical history stored as nested objects inside an array, providing a comprehensive view of past diagnoses and treatments.
*/
// Array of patients with nested medical history
const patientsWithHistory = [
    {
        name: "David",
        age: 60,
        history: [
            { year: 2020, diagnosis: "Hypertension", treatment: "Medication" },
            { year: 2021, diagnosis: "High Cholesterol", treatment: "Diet Control" }
        ]
    },
    {
        name: "Emily",
        age: 35,
        history: [
            { year: 2019, diagnosis: "Asthma", treatment: "Inhaler" },
            { year: 2022, diagnosis: "Pneumonia", treatment: "Antibiotics" }
        ]
    }
];

// Displaying patient's medical history
patientsWithHistory.forEach(patient => {
    console.log(`Medical history for ${patient.name}:`);
    patient.history.forEach(record => {
        console.log(`- Year: ${record.year}, Diagnosis: ${record.diagnosis}, Treatment: ${record.treatment}`);
    });
});
// Output:
// Medical history for David:
// - Year: 2020, Diagnosis: Hypertension, Treatment: Medication
// - Year: 2021, Diagnosis: High Cholesterol, Treatment: Diet Control
// Medical history for Emily:
// - Year: 2019, Diagnosis: Asthma, Treatment: Inhaler
// - Year: 2022, Diagnosis: Pneumonia, Treatment: Antibiotics
