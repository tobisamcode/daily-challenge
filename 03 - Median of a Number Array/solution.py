def find_median(arr):
    # Your code here
    arr.sort()
    middle_index = len(arr) // 2

    if len(arr) % 2 == 0:
        return (arr[middle_index - 1] + arr[middle_index]) / 2
    else:
        return arr[middle_index]

# Example
print(find_median([3, 1, 4, 1, 5, 9])) # 3.5
