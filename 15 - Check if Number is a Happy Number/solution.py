def is_happy(n):
    # Set to keep track of numbers we've seen
    seen = set()

    # Continue until we reach either 1 or detect a cycle
    while n != 1 and n not in seen:
        # Add the current number to the set
        seen.add(n)

        # Get the sum of the squares of the digits
        n = sum(int(digit) ** 2 for digit in str(n))
    
    # Return true if we've reached 1 or a cycle
    return n == 1

# Test Cases
print(is_happy(19)) # true