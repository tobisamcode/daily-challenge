function invertCase(str) {
  let result = "";

  for (let char of str) {
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
}

// Test Cases
console.log(invertCase("Hello, World!")); // hELLO, wORLD!
