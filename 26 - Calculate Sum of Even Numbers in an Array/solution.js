function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

// Test Cases
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5])); // 6
