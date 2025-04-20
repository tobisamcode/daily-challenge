## ✅ JavaScript Solution

```javascript
function replaceVowelsWithAsterisk(str) {
  return str.replace(/[aeiou]/gi, "*");
}
```

---

## 🧪 Example Usage

```javascript
console.log(replaceVowelsWithAsterisk("hello World"));
// Output: "h*ll* W*rld"
```

---

## 🔍 How It Works

### Using `.replace()` with Regex:

- `/[aeiou]/gi` is a **regular expression**:
  - `[...]` → matches any of the characters inside the brackets.
  - `a, e, i, o, u` → are the vowels.
  - `g` → global flag, replaces **all** matches.
  - `i` → case-insensitive flag (matches `A` and `a`, etc.).

So any vowel — uppercase or lowercase — gets replaced by `'*'`.

---

## 🔁 Step-by-Step Workflow for `"hello World"`

Original: `"hello World"`

- `h` → not vowel → keep
- `e` → vowel → `*`
- `l` → keep
- `l` → keep
- `o` → vowel → `*`
- (space) → keep
- `W` → keep
- `o` → vowel → `*`
- `r` → keep
- `l` → keep
- `d` → keep

✅ Result: `"h*ll* W*rld"`

---

## ✅ Handles Any Input

```javascript
replaceVowelsWithAsterisk("AEIOU"); // "*****"
replaceVowelsWithAsterisk("Javascript"); // "J*v*scr*pt"
replaceVowelsWithAsterisk(""); // ""
```
