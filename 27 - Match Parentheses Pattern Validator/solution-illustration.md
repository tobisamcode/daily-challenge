## ✅ **Approach**

We’ll use a **stack** data structure:

- When we encounter an **opening parenthesis `(`**, we **push** it onto the stack.
- When we encounter a **closing parenthesis `)`**, we **pop** from the stack.
  - If the stack is empty when trying to pop, that means there's no matching opening bracket → invalid!
- At the end, the stack should be empty if all parentheses are properly closed and nested.

## ✅ **JavaScript Code**

```javascript
function isValidParentheses(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      stack.push(char); // push opening parenthesis
    } else if (char === ")") {
      if (stack.length === 0) {
        return false; // no matching opening
      }
      stack.pop(); // match found, pop the opening
    }
  }

  return stack.length === 0; // if stack is empty, all matched
}
```

---

## 🧪 **Example Execution Flow**

Input: `"(abc)(de)f)g"`

### Step-by-step:

| Char | Stack   | Action                     |
| ---- | ------- | -------------------------- |
| `(`  | `[`(`]` | Push opening parenthesis   |
| `a`  | `[`(`]` | Skip, not a parenthesis    |
| `b`  | `[`(`]` | Skip                       |
| `c`  | `[`(`]` | Skip                       |
| `)`  | `[]`    | Pop, matched with last `(` |
| `(`  | `[`(`]` | Push                       |
| `d`  | `[`(`]` | Skip                       |
| `e`  | `[`(`]` | Skip                       |
| `)`  | `[]`    | Pop                        |
| `f`  | `[]`    | Skip                       |
| `)`  | ❌      | Error! Stack is empty      |

💥 At the last `)`, there's no matching `(` → so it's **invalid**.

### ✅ Output: `false`

---

## ✅ Example of a Valid One:

Input: `"(a(b)c)(d)"`

| Char | Stack       | Action |
| ---- | ----------- | ------ |
| `(`  | `[`(`]`     | Push   |
| `a`  | `[`(`]`     | Skip   |
| `(`  | `[`(`,`(`]` | Push   |
| `b`  | `[`(`,`(`]` | Skip   |
| `)`  | `[`(`]`     | Pop    |
| `c`  | `[`(`]`     | Skip   |
| `)`  | `[]`        | Pop    |
| `(`  | `[`(`]`     | Push   |
| `d`  | `[`(`]`     | Skip   |
| `)`  | `[]`        | Pop    |

✅ Output: `true`
