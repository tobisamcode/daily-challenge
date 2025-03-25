function countUniqueCharacters(str) {
  // Your code here
  const uniqueChars = new Set(str);
  return uniqueChars.size;
}

// Test Cases
console.log(countUniqueCharacters("Hello World"));
