function sumOfPrimes(n) {
  // Your code here
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// Test Cases
console.log(sumOfPrimes(10));
