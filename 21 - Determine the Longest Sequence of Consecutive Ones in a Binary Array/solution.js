function findLongestSequence(nums) {
  // Your code here
  let max = 0;
  let count = 0;

  for (let num of nums) {
    if (num === 1) {
      count++;
      if (count > max) max = count;
    } else {
      count = 0;
    }
  }

  return max;
}

//   Test cases
console.log(findLongestSequence([1, 1, 0, 1, 1, 1]));
