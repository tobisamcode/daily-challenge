def merge_intervals(intervals):
    if not intervals:
        return []
    
    intervals.sort(key=lambda x: x[0])

    merged = [intervals[0]]

    for i in range(1, len(intervals)):
        last = merged[-1]
        current = intervals[i]

        if current[0] <= last[1]:
            # Overlap detected, merge them
            last[1] = max(last[1], current[1])
        else:
            # No overlap, add current interval
            merged.append(current)

    return merged

# Test Cases
print(merge_intervals([[1, 3], [2, 6], [8, 10], [15, 18]])) 