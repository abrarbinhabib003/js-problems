// Input: student's score
let score = 85; // Example score, you can change this value to test different cases

// Variable to store the grade
let grade;

// Determine the grade based on the score
if (score >= 90 && score <= 100) {
  grade = 'A';
} else if (score >= 80 && score <= 89) {
  grade = 'B';
} else if (score >= 70 && score <= 79) {
  grade = 'C';
} else if (score >= 60 && score <= 69) {
  grade = 'D';
} else if (score >= 0 && score <= 59) {
  grade = 'F';
} else {
  grade = 'Invalid score'; // Handles cases where the score is outside the 0-100 range
}

// Output the grade
console.log(`The student's grade is: ${grade}`);
