function binaryGapLength(n) {
  const binary = n.toString(2);
  const gaps = binary.split("1"); // Split the binary string into an array of gaps
  gaps.pop(); // Remove the last gap

  let maxGap = 0;
  for (let i = 0; i < gaps.length; i++) {
    maxGap = Math.max(maxGap, gaps[i].length);
  }

  return maxGap;
}

// Test Cases
console.log(binaryGapLength(9));
console.log(binaryGapLength(10));
console.log(binaryGapLength(529));
