/*
Scenario 5: Room Allocation – Array of Objects for Room Details
The hospital allocates rooms to patients based on availability. Each room is represented as an object, and they are managed within an array.
*/
// Array of room objects
const rooms = [
    { roomNumber: 101, type: "ICU", isOccupied: true },
    { roomNumber: 102, type: "General", isOccupied: false },
    { roomNumber: 103, type: "Pediatric", isOccupied: true }
];

// Checking room availability and types
rooms.forEach(room => {
    if (!room.isOccupied) {
        console.log(`Room ${room.roomNumber} (${room.type}) is available.`);
    } else {
        console.log(`Room ${room.roomNumber} (${room.type}) is currently occupied.`);
    }
});
// Output:
// Room 101 (ICU) is currently occupied.
// Room 102 (General) is available.
// Room 103 (Pediatric) is currently occupied.
