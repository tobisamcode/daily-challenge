function frequency(matrix) {
  const freq = {};

  for (let row of matrix) {
    for (let num of row) {
      freq[num] = (freq[num] || 0) + 1;
    }
  }

  return freq;
}

// Test Cases
console.log(
  frequency([
    [1, 2, 2, 3],
    [3, 3, 1],
    [4, 5, 1, 1],
  ])
); // {"1": 4, "2": 2, "3": 3, "4": 1, "5": 1}
