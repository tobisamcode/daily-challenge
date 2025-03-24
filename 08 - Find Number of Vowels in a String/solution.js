function countVowels(str) {
  // Your code here

  //   Define a set of vowels (both uppercase and lowercase)
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let count = 0;

  //    Loop through each character in the string
  for (let char of str) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}

// TEST CASES
console.log(countVowels("Hello World")); // 3
