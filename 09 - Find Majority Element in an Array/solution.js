function findMajorityElement(nums) {
  // Your code here
  let freq = new Map();
  let majorityCount = Math.floor(nums.length / 2);

  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);

    // Check if it’s a majority
    if (freq.get(num) > majorityCount) {
      return num;
    }
  }

  // If no majority is found
  return "No Majority Element";
}

// Test Cases
console.log(findMajorityElement([3, 2, 3]));
