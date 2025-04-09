def sort_array_by_parity(nums):
    # Your code here
    evens = []
    odds = []

    for num in nums:
        if num % 2 == 0:
            evens.append(num)
        else:
            odds.append(num)

    return evens + odds


#   Test cases
print(sort_array_by_parity([3, 1, 2, 4]))