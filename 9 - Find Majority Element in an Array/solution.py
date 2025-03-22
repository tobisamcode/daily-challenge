def find_majority_element(nums):
    # Your code here
    freq = {}
    majority_count = len(nums) // 2

    for num in nums:
        freq[num] = freq.get(num, 0) + 1

        if freq[num] > majority_count:
            return num

    return "No Majority Element"


# Example
print(find_majority_element([3, 2, 3]))