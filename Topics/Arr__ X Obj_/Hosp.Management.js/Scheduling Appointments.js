/*
Scenario 6: Scheduling Appointments – Array of Objects with Patient and Doctor Details
Appointments are scheduled between patients and doctors, with each appointment represented by an object in an array.
*/
// Array of appointment objects
const appointments = [
    { patient: "Alice", doctor: "Dr. Smith", time: "10:00 AM" },
    { patient: "Bob", doctor: "Dr. Brown", time: "11:00 AM" },
    { patient: "Charlie", doctor: "Dr. Lee", time: "12:00 PM" }
];

// Displaying scheduled appointments
appointments.forEach(appointment => {
    console.log(`Appointment: ${appointment.patient} with ${appointment.doctor} at ${appointment.time}.`);
});
// Output:
// Appointment: Alice with Dr. Smith at 10:00 AM.
// Appointment: Bob with Dr. Brown at 11:00 AM.
// Appointment: Charlie with Dr. Lee at 12:00 PM.
