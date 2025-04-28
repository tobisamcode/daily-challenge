def sum_of_digits(num):
    # Write your code here
    while num >= 10:
        sum = 0
        while num > 0:
            sum += num % 10
            num //= 10
        num = sum

    return num


# Test Cases
print(sum_of_digits(38))