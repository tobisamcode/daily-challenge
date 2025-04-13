## ✅ **Approach**

We’ll process the Roman numeral from **left to right**, using these rules:

### Roman Symbols:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

### Subtraction Rule:

If **a smaller value is before a larger one**, we **subtract** it.  
For example:

- `IV` → 5 - 1 = 4
- `IX` → 10 - 1 = 9
- `XL` → 50 - 10 = 40

### So the algorithm:

1. Loop through the Roman numeral string.
2. For each symbol:
   - Compare its value with the **next** symbol’s value.
   - If the next is larger, **subtract** current.
   - Otherwise, **add** it.

---

## ✅ **JavaScript Code**

```javascript
function romanToInt(roman) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentVal = values[roman[i]];
    const nextVal = values[roman[i + 1]];

    if (nextVal > currentVal) {
      total -= currentVal; // subtract if next is bigger
    } else {
      total += currentVal; // normal addition
    }
  }

  return total;
}
```

---

## 🧪 **Example Execution Flow**

Input: `"XIV"` → Expected output: `14`

| Index | Symbol | Current | Next | Action        | Running Total |
| ----- | ------ | ------- | ---- | ------------- | ------------- |
| 0     | X      | 10      | I    | 10 > 1 → add  | 10            |
| 1     | I      | 1       | V    | 1 < 5 → sub   | 10 - 1 = 9    |
| 2     | V      | 5       | -    | No next → add | 9 + 5 = 14    |

✅ Output: `14`

---

## ✅ Another Example: `"MCMXCIV"` → 1994

Let's quickly break that down:

- `M` = 1000
- `CM` = 900 (100 before 1000)
- `XC` = 90 (10 before 100)
- `IV` = 4 (1 before 5)

So: `1000 + 900 + 90 + 4 = 1994`

---
