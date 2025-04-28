### ✅ JavaScript Code:

```javascript
function countDuplicates(arr) {
  const freq = {}; // to store frequency of each number
  let duplicateCount = 0;

  // Count frequency
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Count how many numbers occur more than once
  for (let key in freq) {
    if (freq[key] > 1) {
      duplicateCount++;
    }
  }

  return duplicateCount;
}

// Example usage:
const input = [1, 2, 3, 4, 5, 1, 2, 6];
console.log(countDuplicates(input)); // Output: 2
```

---

### 📚 How the code works:

1. Create an empty **object** `freq` to store how many times each number appears.
2. Loop through the array:
   - For each number, increase its count in the `freq` object.
3. After counting:
   - Loop through the `freq` object.
   - If a number’s count is **greater than 1**, it’s a duplicate → increment `duplicateCount`.
4. Return `duplicateCount`.

---

### 🛠 Example walkthrough for `[1, 2, 3, 4, 5, 1, 2, 6]`

- After counting frequencies:

```
{
  1: 2,
  2: 2,
  3: 1,
  4: 1,
  5: 1,
  6: 1
}
```

- Only `1` and `2` appear **more than once**.
- ✅ So the output is **2**.
