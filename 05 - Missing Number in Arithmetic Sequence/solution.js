function findMissingNumber(arr) {
  // Your code here
  let n = arr.length;

  // Step 1: Calculate the common difference (d)
  let diff = (arr[n - 1] - arr[0]) / n;

  // Step 2: Check if the difference is present in the array
  for (let i = 1; i < n; i++) {
    if (arr[i] + diff !== arr[i + 1]) {
      return arr[i] + diff;
    }
  }

  return "";
}

// Example
console.log(findMissingNumber([5, 10, 20, 25, 30]));
