def find_missing_number(arr):
    n = len(arr) + 1
    expected_sum = (n * (n + 1)) // 2
    actual_sum = sum(arr)
    return expected_sum - actual_sum


print(find_missing_number([1, 2, 3, 4, 5, 6, 7]))  # 3