def frequency(matrix):
    freq = {}

    for row in matrix:
        for num in row:
            freq[num] = freq.get(num, 0) + 1

    return freq

# Test Cases
print(frequency([[1, 2, 2, 3], [3, 3, 1], [4, 5, 1, 1]])) # {"1": 4, "2": 2, "3": 3, "4": 1, "5": 1}