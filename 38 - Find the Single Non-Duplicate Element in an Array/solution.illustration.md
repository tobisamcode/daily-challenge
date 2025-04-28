### First, what's the problem?

You have an array like this:

```
[1, 1, 3, 3, 4, 4, 5, 7, 7]
```

- Every number appears **two times** except **one number**, which appears only **once**.
- You need to **find that single number**.

---

### Second, why do we use **XOR ( ^ )**?

🔵 The key rules of XOR are:

| XOR rule    | Meaning                               |
| ----------- | ------------------------------------- |
| `a ^ a = 0` | Any number XOR with itself becomes 0. |
| `a ^ 0 = a` | Any number XOR with 0 stays the same. |

➡️ So, **if you XOR a number with itself, it disappears**.

---

### Third, the logic:

If you XOR **all** the numbers together:

- All numbers that **appear twice** will cancel out to 0.
- The number that **appears once** will remain!

---

### Now, walk with me through this input:

Input: `[1, 1, 3, 3, 4, 4, 5, 7, 7]`

#### Step-by-step:

| Step | Current Number | Current `result` | Calculation |
| :--: | :------------: | :--------------: | :---------- |
|  1   |       1        |  0 → 0 ^ 1 = 1   | result = 1  |
|  2   |       1        |  1 → 1 ^ 1 = 0   | result = 0  |
|  3   |       3        |  0 → 0 ^ 3 = 3   | result = 3  |
|  4   |       3        |  3 → 3 ^ 3 = 0   | result = 0  |
|  5   |       4        |  0 → 0 ^ 4 = 4   | result = 4  |
|  6   |       4        |  4 → 4 ^ 4 = 0   | result = 0  |
|  7   |       5        |  0 → 0 ^ 5 = 5   | result = 5  |
|  8   |       7        |  5 → 5 ^ 7 = 2   | result = 2  |
|  9   |       7        |  2 → 2 ^ 7 = 5   | result = 5  |

✅ Final result is **5**!

---

### 🔥 Why it works:

- `1 ^ 1 = 0` → removed
- `3 ^ 3 = 0` → removed
- `4 ^ 4 = 0` → removed
- `7 ^ 7 = 0` → removed
- Only `5` remains!

---

### 🎯 Super simple meaning:

> **"XOR everything, pairs vanish, lonely number stays."**

---

### Full simple version of the code again:

```javascript
function singleNonDuplicate(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num; // ^= means "result = result XOR num"
  }
  return result;
}

console.log(singleNonDuplicate([1, 1, 3, 3, 4, 4, 5, 7, 7])); // Output: 5
```
