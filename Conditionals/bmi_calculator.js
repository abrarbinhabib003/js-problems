// Input values for weight in kilograms and height in meters
let weight = 70; // weight in kilograms
let height = 1.75; // height in meters

// Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
let bmi = weight / (height * height);
let category = '';

// Determine the health category using if, else if, and else statements
if (bmi < 18.5) {
  category = 'Underweight';
} else if (bmi <= 24.9) {
  category = 'Normal';
} else if (bmi <= 29.9) {
  category = 'Overweight';
} else {
  category = 'Obese';
}

// Print the BMI and corresponding health category
console.log(`Your BMI is ${bmi.toFixed(2)}. You are ${category}.`);
