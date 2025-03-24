function transformArray(arr) {
  // Your code here
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      [arr[i]] = [arr[i] * i];
    } else {
      [arr[i]] = [arr[i] - i];
    }
  }

  return arr;
}

// Test Cases
console.log(transformArray([4, 3, 6, 2, 5]));
