function shuffleInPairs(arr) {
  // Your code here
  const n = arr.length;

  // Iterate through the array in steps of 2
  for (let i = 0; i < n; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }

  return arr;
}

// Example
console.log(shuffleInPairs([5, 9, 1, 3, 8, 2])); // [9, 5, 3, 1, 2, 8]
