function sumOfDigits(num) {
  // Write your code here
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    num = sum;
  }

  return num;
}

// Test Cases
console.log(sumOfDigits(38));
