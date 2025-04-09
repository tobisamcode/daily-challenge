# Solution

```js
function sortArrayByParity(nums) {
  const evens = [];
  const odds = [];

  for (let num of nums) {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  return [...evens, ...odds];
}
```

---

## 🧪 Example usage:

```js
const input = [3, 1, 2, 4];
console.log(sortArrayByParity(input)); // Output: [2, 4, 3, 1]
```

---

## 🧠 How it works:

1. Loop through each number.
2. If it’s even (`num % 2 === 0`), push it to the `evens` array.
3. Otherwise, push it to the `odds` array.
4. Finally, return both arrays combined: `evens` first, `odds` after.

---

## ✨ Workflow with Example:

Input: `[3, 1, 2, 4]`

| Step | Number | Even/Odd | evens    | odds     |
| ---- | ------ | -------- | -------- | -------- |
| 1    | 3      | Odd      | `[]`     | `[3]`    |
| 2    | 1      | Odd      | `[]`     | `[3, 1]` |
| 3    | 2      | Even     | `[2]`    | `[3, 1]` |
| 4    | 4      | Even     | `[2, 4]` | `[3, 1]` |

➡️ Final Output: `[2, 4, 3, 1]`
