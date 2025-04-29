def unique_elements(arr):
    # Write your code here
    seen = set()
    result = []

    for str in arr:
        if str not in seen:
            seen.add(str)
            result.append(str)

    return result


# Test Cases    
print(unique_elements(["apple", "banana", "apple", "orange", "banana", "kiwi"]))