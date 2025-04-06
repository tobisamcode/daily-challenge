<!-- ```markdown -->

# Longest Sequence of Consecutive 1s

## Problem

Given a binary array (an array consisting only of `0`s and `1`s), determine the length of the longest sequence of consecutive `1`s.

## Example

### Input:

```js
[1, 1, 0, 1, 1, 1];
```

### Output:

```js
3;
```

## Solution Explanation

### Approach

We will iterate through the binary array and keep track of the current streak of consecutive `1`s using a `count` variable. Whenever we encounter a `0`, we reset the `count` to `0`. Additionally, we will keep track of the maximum streak of `1`s encountered so far using the `max` variable.

### Algorithm:

1. **Initialize `max` and `count`**:
   - `max`: stores the longest sequence of consecutive `1`s found.
   - `count`: tracks the current streak of consecutive `1`s.
2. **Loop through the array**:

   - If the current number is `1`, increase the `count`.
   - If the `count` exceeds the `max`, update `max`.
   - If the current number is `0`, reset `count` to `0`.

3. **Return the `max`** value after the loop ends.

---

## Step-by-step Breakdown

Let’s walk through the solution using the example input `[1, 1, 0, 1, 1, 1]`:

| **Index** | **Value** | **Current `count`** | **Current `max`** | **Reason**                           |
| --------- | --------- | ------------------- | ----------------- | ------------------------------------ |
| 0         | 1         | 1                   | 1                 | Start of a 1-streak                  |
| 1         | 1         | 2                   | 2                 | Continuing the streak                |
| 2         | 0         | 0                   | 2                 | Hit a `0`, reset the streak          |
| 3         | 1         | 1                   | 2                 | New `1`-streak starts                |
| 4         | 1         | 2                   | 2                 | Continuing the streak                |
| 5         | 1         | 3                   | 3                 | New `max` streak: 3 consecutive `1`s |

### Final result:

- `count` ends at `3`.
- The longest sequence of consecutive `1`s (`max`) is **3**.

---

## Code Implementation

```js
function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let count = 0;

  // Iterate over the array
  for (let num of nums) {
    if (num === 1) {
      count++; // Increment the streak of 1s
      if (count > max) max = count; // Update max if streak is longer
    } else {
      count = 0; // Reset streak on encountering 0
    }
  }

  return max; // Return the longest streak of 1s
}
```

---

## Example Usage

```js
const input = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(input)); // Output: 3
```

---

## Time Complexity

- **Time Complexity**: `O(n)`, where `n` is the length of the array. We iterate through the array once.
- **Space Complexity**: `O(1)`, since we are using only a few extra variables (`count`, `max`).
