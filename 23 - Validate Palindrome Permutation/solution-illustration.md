## ✅ Problem Summary:

We want to check if **any permutation** of the string can form a **palindrome**.

> 🔑 **Key Rule**:
>
> - A string can form a palindrome **if at most one character has an odd count**.

---

## ✅ Simple Solution in JavaScript:

```js
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
```

---

## 🔍 Example:

```js
console.log(canFormPalindrome("Tact Coa")); // true
```

**Why true?**  
"tact coa" → cleaned → `"tactcoa"`  
→ valid permutations like: `"tacocat"` or `"atcocta"` (both palindromes)

---

## 🧠 Explanation:

1. **Clean the string**:

   - `toLowerCase()` to ignore casing.
   - `replace(/[^a-z]/g, "")` to remove spaces and symbols.

2. **Count character frequencies**.

3. **Check how many characters have odd frequencies**:
   - If more than **1 odd count**, it **can't be** a palindrome.

---

## 🔁 Example walkthrough for "Tact Coa":

Cleaned: `"tactcoa"`

| Char | Count |
| ---- | ----- |
| t    | 2     |
| a    | 2     |
| c    | 2     |
| o    | 1     |

✅ Only one character has an odd count → **can form a palindrome**
