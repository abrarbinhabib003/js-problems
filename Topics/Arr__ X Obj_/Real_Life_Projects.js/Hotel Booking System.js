/*
/////////////////////////////////////////////////////////////////////////////////

Hotels manage rooms, bookings, and customer details using arrays of objects for seamless operations.

Scenario: Room Booking and Customer Management
Rooms are represented as objects in an array, and each booking is tracked with customer information.

//////////////////////////////////////////////////////////////////////////////////
*/
// Array of room objects
const rooms = [
    { roomNumber: 101, type: "Deluxe", price: 150, isAvailable: true },
    { roomNumber: 102, type: "Suite", price: 300, isAvailable: false }
];

// Array of booking objects
const bookings = [
    { bookingId: 501, customer: "Alice", roomNumber: 101, nights: 3, total: 450 },
    { bookingId: 502, customer: "Bob", roomNumber: 102, nights: 2, total: 600 }
];

// Display room details
rooms.forEach(room => {
    console.log(`Room: ${room.type}, Price: $${room.price}, Available: ${room.isAvailable}`);
});

// Display booking details
bookings.forEach(booking => {
    console.log(`Booking ID: ${booking.bookingId}, Customer: ${booking.customer}, Total: $${booking.total}`);
});
