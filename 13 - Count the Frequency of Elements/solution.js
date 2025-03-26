function countFrequency(arr) {
  // Write your code here
  let frequency = {};

  for (let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
  }

  return frequency;
}

// Test Cases
console.log(
  countFrequency(["apple", "banana", "apple", "orange", "banana", "banana"])
);
