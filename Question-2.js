function decodeString(s) {
  // Create an integers array and a characters array
  const integersArray = [];
  const charactersArray = [];
  let partialDecodedString = '';
  let completeDecodedString = '';
  let integer;

  // Loop through the encoded string
  for (let i = 0; i < s.length; i++) {
    integer = 0;

    // If a character can be converted to a real number
    if (typeof Number(s[i]) === 'number' && !isNaN(Number(s[i]))) {
      while (typeof Number(s[i]) === 'number' && !isNaN(Number(s[i]))) {
        // Calculate the largest integer
        integer = integer * 10 + Number(s[i]);

        i++;
      }

      // Push each integer onto the integers array
      integersArray.push(integer);

      i--;
      // Every time I encounter a closing bracket
    } else if (s[i] === ']') {
      while (charactersArray.length && charactersArray[charactersArray.length - 1] !== '[') {
        // Pop the character off from the characters array
        // Concatenate that character to the partial decoded string
        partialDecodedString = charactersArray.pop() + partialDecodedString;
      }

      // Until I encounter an opening bracket that also needs to be popped off
      if (charactersArray.length && charactersArray[charactersArray.length - 1] === '[') {
        charactersArray.pop();
      }

      // Pop the integer off from the integers array
      if (integersArray.length) {
        integer = integersArray.pop();
      }

      // Repeat that partial decoded string that integer number of times
      for (let j = 0; j < integer; j++) {
        // Concatenate the complete decoded string to the repeated partial decoded string
        completeDecodedString += partialDecodedString;
      }

      // Loop through that complete decoded string
      for (let k = 0; k < completeDecodedString.length; k++) {
        // Push the character onto the characters array again
        charactersArray.push(completeDecodedString[k]);
      }

      partialDecodedString = '';
      completeDecodedString = '';
    } else {
      // Push each character except for the closing bracket onto the characters array
      charactersArray.push(s[i]);
    }
  }

  // Loop through the characters array
  while (charactersArray.length) {
    // Pop the character off from it
    // Concatenate that character to the complete decoded string
    completeDecodedString = charactersArray.pop() + completeDecodedString;
  }

  return completeDecodedString;
}

// Test Cases:
// decodeString("4[ab]");
// "abababab"

// decodeString("2[b3[a]]");
// "baaabaaa"
