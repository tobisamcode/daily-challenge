function lengthOfLIS(nums) {
  // Write your code here
  if (!nums.length) return 0;

  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Test Cases
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
