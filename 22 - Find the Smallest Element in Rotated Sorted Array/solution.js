function findSmallest(nums) {
  // Your code here
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return nums[start];
}

// Test cases
console.log(findSmallest([4, 5, 6, 7, 0, 1, 2]));
