function romanToInt(roman) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentVal = values[roman[i]];
    const nextVal = values[roman[i + 1]];

    if (nextVal > currentVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
}

// Test Cases
console.log(romanToInt("XIV")); // 14
