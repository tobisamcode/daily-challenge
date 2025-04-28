function countDuplicates(nums) {
  // Write your code here
  let freq = {};
  let duplicatedCount = 0;

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let [_, value] of Object.entries(freq)) {
    if (value > 1) duplicatedCount++;
  }

  return duplicatedCount;
}

// Test Cases
console.log(countDuplicates([1, 2, 3, 4, 5, 1, 2, 6, 6]));
