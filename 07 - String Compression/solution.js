function compressString(input) {
  // Your code here
  let n = input.length;
  let compressed = [];
  let count = 1;

  for (let i = 0; i < n; i++) {
    // If the current character is repeated, increment the count
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      // Store character + count & Reset count for the next character
      compressed.push(input[i] + count);
      count = 1;
    }
  }

  let compressedStr = compressed.join("");
  return compressedStr.length < n ? compressedStr : input;
}

// ✅ Test Cases
console.log(compressString("aabcccccaaa")); // "a2b1c5a3"
console.log(compressString("abcdef")); // "abcdef" (unchanged)
console.log(compressString("aa")); // "aa" (unchanged)
console.log(compressString("aabbcc")); // "aabbcc" (unchanged)
console.log(compressString("")); // "" (edge case)
