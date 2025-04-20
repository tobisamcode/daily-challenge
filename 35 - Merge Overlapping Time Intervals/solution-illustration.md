## ✅ JavaScript Solution

```javascript
function mergeIntervals(intervals) {
  if (!intervals.length) return [];

  // Step 1: Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];

    if (current[0] <= last[1]) {
      // Overlap detected, merge them
      last[1] = Math.max(last[1], current[1]);
    } else {
      // No overlap, add current interval
      merged.push(current);
    }
  }

  return merged;
}
```

---

## 🧪 Example Usage

```javascript
const input = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(input));
// Output: [[1, 6], [8, 10], [15, 18]]
```

---

## 🔁 Step-by-Step Flow

### Input: `[[1, 3], [2, 6], [8, 10], [15, 18]]`

1. **Sort** intervals by start → already sorted here
2. Start with `[1, 3]` in merged list
3. Compare `[2, 6]` with last `[1, 3]` → overlapping → merge to `[1, 6]`
4. Compare `[8, 10]` with last `[1, 6]` → no overlap → add `[8, 10]`
5. Compare `[15, 18]` with last `[8, 10]` → no overlap → add `[15, 18]`

✅ Final merged result: `[[1, 6], [8, 10], [15, 18]]`

---

## 🧠 Handles Edge Cases

```javascript
mergeIntervals([]); // []
mergeIntervals([
  [1, 4],
  [4, 5],
]); // [[1, 5]]
mergeIntervals([[1, 5]]); // [[1, 5]]
```
