def transform_array(arr):
    # Your code here
    n = len(arr)

    for i in range(n):
        if i % 2 == 0:
            arr[i] *= i
        else:
            arr[i] -= i

    return arr

# Test Cases
print(transform_array([4, 3, 6, 2, 5]))