def count_frequency(arr):
    # Write your code here
    frequency = {}

    for item in arr:
        frequency[item] = frequency.get(item, 0) + 1

    return frequency

# Test Cases
print(count_frequency(["apple", "banana", "apple", "orange", "banana", "banana"]))