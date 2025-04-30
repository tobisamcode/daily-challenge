def majority_element(nums):
    # Write your code here
    count = 0
    majority = None

    for num in nums:
        if count == 0:
            majority = num
        count =  count + 1 if num == majority else count - 1

    freq = sum(1 for num in nums if num == majority)
    return freq > len(nums) // 2 and majority or None

# Test Cases
print(majority_element([3, 3, 4, 2, 4, 4, 2, 4, 4]))