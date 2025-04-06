def find_longest_sequence(nums):
    # Your code here
    max = 0
    count = 0

    for num in nums:
        if num == 1:
            count += 1
            if count > max:
                max = count
        else:
            count = 0

    return max


#   Test cases
print(find_longest_sequence([1, 1, 0, 1, 1, 1]))

