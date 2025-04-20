def flatter_array(arr):
    result = []

    for item in arr:
        if isinstance (item, list):
            result = result + flatter_array(item)
        else:
            result.append(item)

    return result

# Test Cases
print(flatter_array([1, [2, [3, [4, 5], 6], 7], 8]))