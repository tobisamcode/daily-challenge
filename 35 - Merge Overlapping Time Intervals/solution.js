function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];

    if (current[0] <= last[1]) {
      // overlapping, merge current and last
      last[1] = Math.max(current[1], last[1]);
    } else {
      // not overlapping, push last and start a new one
      merged.push(current);
    }
  }

  return merged;
}

// Test Cases
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
