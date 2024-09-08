/*
Managing a hospital involves handling patient data, doctors, appointments, and billing. We will use arrays, objects, functions, and loops to create a simple hospital management system that handles appointments and billing calculations.

Scenario: Managing Patient Appointments and Billing
We'll create a system that schedules appointments, calculates bills based on services rendered, and updates patient records.

*/

// Array of doctor objects
const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiologist" },
    { id: 2, name: "Dr. Jane", specialty: "Dermatologist" }
];

// Array of service objects with prices
const services = [
    { id: 1, name: "Consultation", price: 100 },
    { id: 2, name: "X-Ray", price: 50 },
    { id: 3, name: "Blood Test", price: 30 }
];

// Array of patient objects
const patients = [
    { id: 1, name: "Alice", age: 30, appointments: [] },
    { id: 2, name: "Bob", age: 45, appointments: [] }
];

// Function to schedule an appointment
function scheduleAppointment(patientId, doctorId, serviceIds) {
    const patient = patients.find(p => p.id === patientId);
    const doctor = doctors.find(d => d.id === doctorId);
    if (!patient || !doctor) {
        console.log("Invalid patient or doctor.");
        return;
    }

    const appointmentServices = services.filter(s => serviceIds.includes(s.id));
    const totalCost = appointmentServices.reduce((sum, service) => sum + service.price, 0);
    
    const appointment = {
        doctor: doctor.name,
        services: appointmentServices.map(s => s.name),
        totalCost: totalCost
    };

    patient.appointments.push(appointment);
    console.log(`Appointment scheduled for ${patient.name} with ${doctor.name}. Total: $${totalCost}`);
}

// Schedule an appointment
scheduleAppointment(1, 1, [1, 2]); // Alice with Dr. Smith for Consultation and X-Ray
console.log("Patient Records:", patients);
