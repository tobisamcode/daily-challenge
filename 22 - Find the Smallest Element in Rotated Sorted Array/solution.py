def find_smallest(nums):
    # Your code here
    start = 0
    end = len(nums) - 1

    while start < end:
        mid = (start + end) // 2

        if nums[mid] > nums[end]:
            start = mid + 1
        else:
            end = mid

    return nums[start]


#   Test cases
print(find_smallest([4, 5, 6, 7, 0, 1, 2]))