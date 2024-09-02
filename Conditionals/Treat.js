// Input scores
let yourScore = 85;  // Example: your score
let friendScore = 75;  // Example: friend's score

// Check your score first
if (yourScore > 80) {
  // If you get more than 80, check your friend's score
  if (friendScore > 80) {
    console.log("Go for lunch."); // Both scores are above 80
  } else if (friendScore >= 60) {
    console.log("Tell your friend, good luck next time."); // Friend scored between 60 and 80
  } else if (friendScore >= 40) {
    console.log("Keep your friend's message unseen."); // Friend scored between 40 and 60
  } else {
    console.log("Block your friend."); // Friend scored less than 40
  }
} else {
  // If you get less than or equal to 80
  console.log("Go home, sleep, and act sad.");
}
