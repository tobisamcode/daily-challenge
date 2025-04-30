### 🧠 Goal:

Find the **majority element** (appears more than ⌊n/2⌋ times).

### 🧪 Input:

```js
[3, 3, 4, 2, 4, 4, 2, 4, 4];
```

Length `n = 9` → ⌊n/2⌋ = 4 → So we need an element that appears **more than 4 times**.

---

### 🔄 Algorithm Flow:

We initialize:

- `candidate = null`
- `count = 0`

Now iterate through the array:

| Step | num | candidate | count | Explanation                   |
| ---- | --- | --------- | ----- | ----------------------------- |
| 1    | 3   | 3         | 1     | Set candidate to 3            |
| 2    | 3   | 3         | 2     | Same as candidate → increment |
| 3    | 4   | 3         | 1     | Not candidate → decrement     |
| 4    | 2   | 3         | 0     | Not candidate → decrement     |
| 5    | 4   | 4         | 1     | Count was 0 → new candidate 4 |
| 6    | 4   | 4         | 2     | Same as candidate → increment |
| 7    | 2   | 4         | 1     | Not candidate → decrement     |
| 8    | 4   | 4         | 2     | Same as candidate → increment |
| 9    | 4   | 4         | 3     | Same as candidate → increment |

---

### ✅ Candidate Found: `4`

### 🔍 Final Step — Verify:

Count how many times `4` appears: **5 times**  
`5 > 4` → ✔️ `4` is the **majority element**.

---

### 🧾 Final Output:

```js
4;
```
