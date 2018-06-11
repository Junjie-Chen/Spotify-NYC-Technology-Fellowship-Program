function changePossibilities(amount, denominations) {
  // Declare a counter variable to count the total number of combinations
  let counter = 0;
  // Declare a maximumCounter variable to track the maximum number of combinations
  // The maximum number of combinations is the amount
  let maximumCounter = amount;

  // If the amount is found in the denominations array and the amount is not the smallest denomination
  if (denominations.indexOf(amount) !== -1 && amount !== Math.min.apply(null, denominations)) {
    // Increment the counter by 1 as we found one combination to make the amount of money with coins of the available denominations
    counter++;
  }

  // Base Case:
  // If the amount is found in the denominations array and the amount is the smallest denomination
  if (denominations.indexOf(amount) !== -1 && amount === Math.min.apply(null, denominations)) {
    // Return 1 up the call stack as we found the last combination to make the amount of money with coins of the available denominations
    return 1;
  }

  // Loop through the denominations array
  for (let i = 0; i < denominations.length; i++) {
    let denomination = denominations[i];

    // If the amount is greater than the denomination
    if (amount > denomination) {
      // Recursive Case:
      // Call changePossibilities recursively for each iteration to reduce the amount by the denomination until we reach the base case
      counter += changePossibilities(amount - denomination, denominations);

      // If the maximumCounter is less than the counter
      if (maximumCounter < counter) {
        // Replace the counter with the maximumCounter to eliminate duplicate combinations possibly
        counter = maximumCounter;
      }
    }
  }

  return counter;
}

// Test Case:
// changePossibilities(4, [1, 2, 3]);
// 4
