// Input values for age and student status
let age = 25; // Example: age of the person
let isStudent = true; // Example: whether the person is a student (true/false)

// Declare the ticket fare variable
let ticketFare;

// Calculate the ticket fare based on age and student status
if (age < 10) {
  // Children (age < 10): free
  ticketFare = 0;
} else if (isStudent) {
  // Students get a 50% discount
  ticketFare = 800 * 0.5;
} else if (age >= 60) {
  // Senior citizens (age >= 60) get a 15% discount
  ticketFare = 800 * 0.85;
} else {
  // Regular ticket fare
  ticketFare = 800;
}

// Print the ticket fare
console.log(`Your ticket fare is ${ticketFare} tk.`);
