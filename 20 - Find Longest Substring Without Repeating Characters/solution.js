function findLongestSubstring(string) {
  // Your code here
  let maxLength = 0;
  let start = 0;
  const seen = new Map();

  for (let end = 0; end < string.length; end++) {
    const char = string[end];

    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }

    seen.set(char, end);

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

//   Test cases
console.log(findLongestSubstring("abcabcbb"));
