// Function to shuffle an array using the Fisher-Yates algorithm
const fisherYatesShuffle = (array) => {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Choose a random index
    const ind = Math.floor(Math.random() * counter);
    // Decrease the counter by 1
    counter--;
    // Swap the last element with the random element
    const temp = array[counter];
    array[counter] = array[ind];
    array[ind] = temp;
  }

  return array;
};

// Original funtion to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
const shuffledArray = fisherYatesShuffle(myArray);
console.log({myArray});
console.log({shuffledArray});
