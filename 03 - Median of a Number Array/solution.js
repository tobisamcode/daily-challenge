function findMedian(arr) {
  // Your code here
  arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(arr.length / 2);

  return arr.length % 2 === 0
    ? (arr[middleIndex - 1] + arr[middleIndex]) / 2
    : arr[middleIndex];
}

// Example
console.log(findMedian([3, 1, 4, 1, 5, 9])); // 3.5
