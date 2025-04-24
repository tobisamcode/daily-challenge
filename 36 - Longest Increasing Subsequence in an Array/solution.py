def length_of_lis(nums):
    # Write your code here
    if not nums:
        return 0

    dp = [1] * len(nums)

    for i in range(1, len(nums)):
        for j in range(0, i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)


# Test Cases
print(length_of_lis([10, 9, 2, 5, 3, 7, 101, 18]))