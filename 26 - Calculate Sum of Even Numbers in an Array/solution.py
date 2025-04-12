def sum_of_even_numbers(arr):
    sum = 0
    for num in arr:
        if num % 2 == 0:
            sum += num
    return sum


# Test Cases
print(sum_of_even_numbers([1, 2, 3, 4, 5]))  # 6