def count_duplicates(nums):
    # Write your code here
    freq = {}
    duplicated_count = 0

    for num in nums:
        freq[num] = freq.get(num, 0) + 1

    for _, value in freq.items():
        if value > 1:
            duplicated_count += 1

    return duplicated_count


# Test Cases
print(count_duplicates([1, 2, 3, 4, 5, 1, 2, 6, 6]))