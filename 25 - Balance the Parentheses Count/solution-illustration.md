## 🧩 Problem:

You're given a string like `"(()))("`, and you need to **balance** it by figuring out **how many parentheses to insert** to make it valid.

Valid = Every `(` has a matching `)`

## ✅ Code:

```js
function minInsertionsToBalance(s) {
  let open = 0; // Count of unmatched '('
  let insertions = 0; // Count of ')' or '(' we need to insert

  for (let char of s) {
    if (char === "(") {
      open++; // Found an opening, needs future closing
    } else if (char === ")") {
      if (open > 0) {
        open--; // Match this ')' with a previous '('
      } else {
        insertions++; // No '(' to match → need to insert one
      }
    }
  }

  return insertions + open;
}
```

## 🧪 Example Input: `"(()))("`

Let’s **walk through this step-by-step** 👇

| Index | Char | Action                     | `open` | `insertions` | Explanation                       |
| ----- | ---- | -------------------------- | ------ | ------------ | --------------------------------- |
| 0     | `(`  | Add to open → need closing | 1      | 0            | We now have 1 unmatched `(`       |
| 1     | `(`  | Add to open → need closing | 2      | 0            | We now have 2 unmatched `(`       |
| 2     | `)`  | Match with last `(`        | 1      | 0            | Now 1 unmatched `(` left          |
| 3     | `)`  | Match with last `(`        | 0      | 0            | All matched so far                |
| 4     | `)`  | No open → insert a `(`     | 0      | 1            | We need 1 `(` to balance this `)` |
| 5     | `(`  | Add to open                | 1      | 1            | One more unmatched `(`            |

### 🧠 Final state:

- `open = 1` → We still need **1 closing `)`**
- `insertions = 1` → We already needed **1 opening `(`**

➡️ So, total **insertions needed** = `1 (to match extra ')') + 1 (to close leftover '(')`  
✅ **Output**: `2`

## 🔁 Visual Representation

```
Input:     ( ( ) ) ) (
           ↑ ↑ ↑ ↑ ↑ ↑
Step:     +1+1-1-1+1+1
open:      1 2 1 0 0 1
insert:    0 0 0 0 1 1
```

Final answer: `open (1) + insertions (1) = 2`

Let me know if you want this turned into an animation or graphic format too! 😊
