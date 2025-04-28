**step-by-step** using the **example input: 38**.

---

### 📜 Code again:

```javascript
function addDigits(num) {
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
}
```

---

### 📈 Flow of Execution (Example: Input = 38)

#### 1. Start:

- `num = 38`
- Check `while (num >= 10)` → 38 is greater than 10 → ✅ **Enter the loop**.

---

#### 2. First Inner Loop (Break into digits and sum them):

- Initialize `sum = 0`
- While `num > 0`:

  | num | sum calculation           | updated sum | updated num        |
  | --- | ------------------------- | ----------- | ------------------ |
  | 38  | sum += 38 % 10 → sum += 8 | sum = 8     | num = 38 // 10 = 3 |
  | 3   | sum += 3 % 10 → sum += 3  | sum = 11    | num = 3 // 10 = 0  |

- Exit the inner loop because `num == 0`.

---

#### 3. Update `num`:

- Now, `num = sum = 11`

---

#### 4. Second Outer Loop Check:

- `num = 11`
- Still `num >= 10` → ✅ **Enter the loop again**.

---

#### 5. Second Inner Loop (Break into digits and sum them):

- Initialize `sum = 0`
- While `num > 0`:

  | num | sum calculation           | updated sum | updated num        |
  | --- | ------------------------- | ----------- | ------------------ |
  | 11  | sum += 11 % 10 → sum += 1 | sum = 1     | num = 11 // 10 = 1 |
  | 1   | sum += 1 % 10 → sum += 1  | sum = 2     | num = 1 // 10 = 0  |

- Exit the inner loop because `num == 0`.

---

#### 6. Update `num`:

- Now, `num = sum = 2`

---

#### 7. Final Outer Loop Check:

- `num = 2`
- `num < 10` → ❌ **Exit the loop**.

---

#### 8. Return the Answer:

- Final answer is `2`

---

### 🧠 Visual Summary of Each Step:

```
Start with 38
38 → 3 + 8 = 11
11 → 1 + 1 = 2
2 → done! (single digit)
```

---

### 🔥 In Simple Words:

- Break the number into digits, add them.
- If result is still more than 9, **break and add again**.
- Keep going until you get a **single digit**.
