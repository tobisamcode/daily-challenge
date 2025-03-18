function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix.length === 0) return "";
    }
  }

  return prefix;
}

// Example usage
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["interstellar", "internet", "internal"])); // Output: "inte"
console.log(longestCommonPrefix(["apple", "ape", "april"])); // Output: "ap"
