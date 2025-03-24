function countUniqueCharacters(str) {
  // Your code here
  const uniquChars = new Set(str);
  return uniquChars.size;
}

// Test Cases
console.log(countUniqueCharacters("Hello World"));
