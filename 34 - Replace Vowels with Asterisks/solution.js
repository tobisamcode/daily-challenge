function replaceVowels(str) {
  return str.replace(/[aeiou]/gi, "*");
}

// Test Cases
console.log(replaceVowels("hello World"));
