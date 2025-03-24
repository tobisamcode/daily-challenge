def shuffle_in_pairs(arr):
    # Your code here
    n = len(arr)

    # Iterate through the array in steps of 2
    for i in range(0, n, 2):
        arr[i], arr[i + 1] = arr[i + 1], arr[i]

    return arr

# Example
print(shuffle_in_pairs([5, 9, 1, 3, 8, 2])) # [9, 5, 3, 1, 2, 8]