def find_missing_number(arr):
    # Your code here
    n = len(arr)

    # Step 1: Calculate the common difference (d)
    diff = (arr[n - 1] - arr[0]) // n

    # Step 2: Check if the difference is present in the array
    for i in range(1, n):
        if arr[i] + diff != arr[i + 1]:
            return arr[i] + diff

    return ""

# Example
print(find_missing_number([5, 10, 20, 25, 30]))