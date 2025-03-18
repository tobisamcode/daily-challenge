function firstNonRepeatedWord(sentence) {
  const words = sentence.split(" ");
  const wordCount = {};

  for (let word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  for (let word of words) {
    if (wordCount[word] === 1) {
      return word;
    }
  }

  return "";
}

// Example usage
const sentence = "this is a test this test is fun";
const result = firstNonRepeatedWord(sentence);
console.log(result); // Output: "a"
