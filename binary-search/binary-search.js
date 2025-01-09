// Function to perform binary search on a sorted array
const doSearch = (array, targetValue) => {
  // Initialize the minimum and maximum indices for the search range
  let min = 0;
  let max = array.length - 1;
  let guess; // Variable to hold the current guess index
  let tries = 0; // Counter for the number of tries

  // Continue searching while the search range is valid
  while (min <= max) {
    tries++;
    // Calculate the middle index of the current search range
    guess = Math.floor((min + max) / 2);
    console.log("guess: " + guess);

    // Check if the guessed value is the target value
    if (array[guess] === targetValue) {
      console.log("tries: " + tries);
      return guess;
    }
    // If the guessed value is less than the target, adjust the search range
    else if (array[guess] < targetValue) {
      // Narrow the search to the upper half
      min = guess + 1;
    }
    // If the guessed value is greater than the target, adjust the search range
    else {
      // Narrow the search to the lower half
      max = guess - 1;
    }
  }

  // If the target value is not found, log the tries and return -1
  // Indicate that the target value was not found
  console.log("tries: " + tries);
  return -1;
};

// Array of prime numbers to search through
const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

// Test cases to demonstrate the binary search function
console.log("Result: ", doSearch(primes, 73), "Expected: 20", "tries: 5");
console.log("Result: ", doSearch(primes, 7), "Expected: 3", "tries: 3");
console.log("Result: ", doSearch(primes, 9), "Expected: -1", "tries: 5");
