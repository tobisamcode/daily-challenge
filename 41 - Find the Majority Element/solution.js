function majorityElement(nums) {
  // Write your code here
  let count = 0;
  let majority = null;

  for (let num of nums) {
    if (count === 0) {
      majority = num;
    }
    count += num === majority ? 1 : -1;
  }

  let freq = nums.filter((num) => num === majority).length;
  return freq > Math.floor(nums.length / 2) ? majority : null;
}

// Test Cases
console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));
