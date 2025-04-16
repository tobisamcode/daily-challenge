function findSecondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      [second, first] = [first, num];
    } else if (num > second && num != first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// Test Cases
console.log(findSecondLargest([5, 3, 9, 1, 9])); // 5
