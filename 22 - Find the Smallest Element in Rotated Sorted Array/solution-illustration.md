# Find the Smallest Element in a Rotated Sorted Array

## Problem

You're given a **rotated sorted array**, where the original array was sorted in increasing order but then rotated at some pivot. Your task is to find the **smallest element** in this array.

📌 **Assumption:** No duplicate elements exist in the array.

---

## Example

### Input:

```js
[4, 5, 6, 7, 0, 1, 2];
```

### Output:

```js
0;
```

---

## Approach (Simple & Easy)

We’ll use **binary search** to efficiently find the smallest number.  
Even though the array is rotated, it is still **partially sorted** — which makes binary search a good fit.

### Steps:

1. Initialize `start = 0`, `end = array.length - 1`.
2. Loop while `start < end`:
   - Find the middle index: `mid = Math.floor((start + end) / 2)`.
   - If the middle value is **greater than** the end value → smallest must be on the **right**.
   - Else → smallest must be on the **left or at mid**.
3. When the loop ends, `start` points to the smallest element.

---

## Flow Table

Let’s walk through this input: `[4, 5, 6, 7, 0, 1, 2]`

| `start` | `end` | `mid` | `nums[mid]` | `nums[end]` | Action                     |
| ------- | ----- | ----- | ----------- | ----------- | -------------------------- |
| 0       | 6     | 3     | 7           | 2           | Go right → `start = mid+1` |
| 4       | 6     | 5     | 1           | 2           | Go left → `end = mid`      |
| 4       | 5     | 4     | 0           | 1           | Go left → `end = mid`      |
| 4       | 4     |       |             |             | Loop ends, `nums[4] = 0`   |

✅ **Result:** `0`

---

## Code (JavaScript)

```js
function findMin(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[end]) {
      // smallest is to the right
      start = mid + 1;
    } else {
      // smallest is at mid or to the left
      end = mid;
    }
  }

  return nums[start];
}
```

---

## Example Usage

```js
const input = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(input)); // Output: 0
```

---

## Time & Space Complexity

- ⏱ **Time Complexity:** `O(log n)` — we reduce the search range by half each step.
- 💾 **Space Complexity:** `O(1)` — no extra space used.

---

## Summary

This is a classic binary search variation. The key is comparing `nums[mid]` with `nums[end]` to decide where the smallest number lies.

---
