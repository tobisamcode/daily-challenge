### ✅ JavaScript Code

```javascript
function getUniqueStrings(arr) {
  const seen = new Set();
  const result = [];

  for (let str of arr) {
    if (!seen.has(str)) {
      seen.add(str);
      result.push(str);
    }
  }

  return result;
}

// Example usage:
const input = ["apple", "banana", "apple", "orange", "banana", "kiwi"];
console.log(getUniqueStrings(input)); // Output: ["apple", "banana", "orange", "kiwi"]
```

---

### 🔍 Explanation

- `Set` is used to track strings that have already been added (it only stores **unique** values).
- We loop through the array:
  - If the string is **not yet in the Set**, we add it to the `result` array and mark it as seen.
- Strings like `"apple"` and `"Apple"` are considered **different** because the check is **case-sensitive**.

---

### ✅ Example Walkthrough

Given:

```js
["apple", "banana", "apple", "orange", "banana", "kiwi"];
```

Step-by-step:

- `"apple"` → not seen → ✅ keep it
- `"banana"` → not seen → ✅ keep it
- `"apple"` again → seen → ❌ skip
- `"orange"` → not seen → ✅ keep it
- `"banana"` again → seen → ❌ skip
- `"kiwi"` → not seen → ✅ keep it

➡️ Final result:

```js
["apple", "banana", "orange", "kiwi"];
```
