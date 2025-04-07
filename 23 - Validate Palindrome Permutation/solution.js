function canFormPalindrome(str) {
  const freq = {};
  const cleaned = str.toLowerCase().replace(/[^a-z]/g, "");

  for (let char of cleaned) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let oddCount = 0;

  for (let count of Object.values(freq)) {
    if (count % 2 !== 0) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;
}

//   Test cases
console.log(canFormPalindrome("Tact Coa"));
