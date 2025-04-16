def find_second_largest(arr):
    first = second = -float("inf")

    for num in arr:
        if num > first:
            second, first = first, num
        elif num > second and num != first:
            second = num
      

    return second if second != -float("inf") else None


# Test Cases
print(find_second_largest([5, 3, 9, 1, 9]))  # 5