## ✅ **Goal**

- **Uppercase → lowercase**
- **Lowercase → uppercase**
- **Non-letters → stay the same**

---

## ✅ **Python Code**

```python
def invert_case(s):
    result = ""

    for char in s:
        if char.islower():
            result += char.upper()
        elif char.isupper():
            result += char.lower()
        else:
            result += char  # keep non-alphabetic characters as-is

    return result
```

---

## 🧪 **Example Execution: `"Hello, World!"`**

We’ll go character by character:

| Char    | Action            | Result So Far |
| ------- | ----------------- | ------------- |
| H       | Upper → lower (h) | h             |
| e       | Lower → upper (E) | hE            |
| l       | Lower → upper (L) | hEL           |
| l       | Lower → upper (L) | hELL          |
| o       | Lower → upper (O) | hELLO         |
| ,       | Keep as-is        | hELLO,        |
| (space) | Keep as-is        | hELLO,        |
| W       | Upper → lower (w) | hELLO, w      |
| o       | Lower → upper (O) | hELLO, wO     |
| r       | Lower → upper (R) | hELLO, wOR    |
| l       | Lower → upper (L) | hELLO, wORL   |
| d       | Lower → upper (D) | hELLO, wORLD  |
| !       | Keep as-is        | hELLO, wORLD! |

✅ Output: `"hELLO, wORLD!"`

---

## ✅ Test It

```python
print(invert_case("Hello, World!"))     # hELLO, wORLD!
print(invert_case("123ABCdef"))         # 123abcDEF
print(invert_case("Python3.9"))         # pYTHON3.9
```
