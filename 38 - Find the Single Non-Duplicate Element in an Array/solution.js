function singleNonDuplicate(nums) {
  // Write your code here
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }

  return result;
}

// Test Cases
console.log(singleNonDuplicate([1, 1, 3, 3, 4, 4, 5, 7, 7]));
