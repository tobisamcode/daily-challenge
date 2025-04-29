function uniqueElements(arr) {
  // Write your code here
  let seen = new Set();
  let result = [];

  for (let str of arr) {
    if (!seen.has(str)) {
      seen.add(str);
      result.push(str);
    }
  }

  return result;
}

// Test Cases
console.log(
  uniqueElements(["apple", "banana", "apple", "orange", "banana", "kiwi"])
);
