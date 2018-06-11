function sortByStrings(s, t) {
  // Create an occurrences object
  const occurrences = {};
  let sortedString = '';

  // Loop through the string to be sorted
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    // Store occurrences of each letter in the occurrences object
    occurrences[letter] = occurrences[letter] + 1 || 1;
  }

  // Loop through the string that has the order
  for (let j = 0; j < t.length; j++) {
    let letter = t[j];

    // Retrieve the number of times the same letter occurs in the occurrences object
    // Repeat that letter that number of times
    for (let k = 0; k < occurrences[letter]; k++) {
      // Concatenate the sorted string to each repeated letter
      sortedString += letter;
    }
  }

  return sortedString;
}

// Test Cases:
// sortByStrings("weather", "therapyw");
// "theeraw"

// sortByStrings("good", "odg");
// "oodg"
