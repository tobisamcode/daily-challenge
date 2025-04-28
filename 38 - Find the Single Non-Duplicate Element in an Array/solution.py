def single_non_duplicate(nums):
    # Write your code here
    result = 0
    for num in nums:
        result ^= num

    return result


# Test Cases
print(single_non_duplicate([1, 1, 3, 3, 4, 4, 5, 7, 7]))