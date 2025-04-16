# Illustration

## ✅ **JavaScript Code (Easy Way with `Set` and Sort)**

```javascript
function secondLargest(arr) {
  const unique = [...new Set(arr)]; // remove duplicates

  if (unique.length < 2) {
    return null; // not enough unique numbers
  }

  unique.sort((a, b) => b - a); // descending sort

  return unique[1]; // second largest
}
```

---

## 🧪 **Example: `[5, 3, 9, 1, 9]`**

| Step | Action                          | Result         |
| ---- | ------------------------------- | -------------- |
| 1    | Remove duplicates               | `[5, 3, 9, 1]` |
| 2    | Sort descending                 | `[9, 5, 3, 1]` |
| 3    | Return index 1 (second largest) | `5`            |

✅ Output: `5`

---

## 🧠 **Optimized Version (No Sort, O(n))**

```js
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}
```

🔍 What’s happening:

We’re keeping track of the **two largest numbers** in one loop:

1. **Initialize both `first` and `second` to `-Infinity`**

   - Ensures any number in the array will be greater.

2. **Loop through array**

   - If `num > first`:

     - We’ve found a new biggest number.
     - Shift the current `first` down to `second`, and set `first = num`.

   - Else if `num > second` and `num !== first`:
     - We’ve found a new second largest (but not equal to first).

3. **Edge case**
   - If there's **only one unique number**, `second` stays as `-Infinity` → we return `null`.

### 🧪 Example: `[5, 3, 9, 1, 9]`

| Iteration | num | first | second | Action                  |
| --------- | --- | ----- | ------ | ----------------------- |
| 1         | 5   | 5     | -Inf   | first updated           |
| 2         | 3   | 5     | 3      | second updated          |
| 3         | 9   | 9     | 5      | first & second updated  |
| 4         | 1   | 9     | 5      | no change               |
| 5         | 9   | 9     | 5      | duplicate → skip second |

✅ Result: `5`

## 🔁 When to Use Which?

| Use Case                  | Use `Set + Sort` | Use `Optimized` |
| ------------------------- | ---------------- | --------------- |
| Simplicity/readability    | ✅               |                 |
| Performance (large input) |                  | ✅              |
| Avoid sorting             |                  | ✅              |
