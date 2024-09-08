/*
//////////////////////////////////////////////////////////////////////////////////

Travel Management System
Travel agencies manage trips, bookings, and itineraries using arrays and objects to organize travel details.

Scenario: Trip Packages and Bookings
Trip packages are stored in an array of objects, and each booking tracks customer preferences and costs.

//////////////////////////////////////////////////////////////////////////////////
*/

// Array of trip package objects
const packages = [
    { packageId: 1, destination: "Paris", duration: "5 days", price: 1500 },
    { packageId: 2, destination: "Maldives", duration: "7 days", price: 2000 }
];

// Array of booking objects
const travelBookings = [
    { bookingId: 601, customer: "Alice", packageId: 1, travelers: 2, total: 3000 },
    { bookingId: 602, customer: "Bob", packageId: 2, travelers: 1, total: 2000 }
];

// Display trip packages
packages.forEach(pkg => {
    console.log(`Package: ${pkg.destination}, Duration: ${pkg.duration}, Price: $${pkg.price}`);
});

// Display travel bookings
travelBookings.forEach(booking => {
    console.log(`Booking ID: ${booking.bookingId}, Customer: ${booking.customer}, Total: $${booking.total}`);
});
