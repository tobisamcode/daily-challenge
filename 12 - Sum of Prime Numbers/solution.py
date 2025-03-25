def sum_of_primes(n):
    # Your code here
    sum = 0

    for i in range(2, n + 1):
        if is_prime(i):
            sum += i

    return sum

def is_prime(num):
    if num < 2:
        return False

    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False

    return True

# Test Cases
print(sum_of_primes(10))