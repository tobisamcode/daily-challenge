def binary_gap_length(n):
    binary = bin(n)
    gaps = binary.split("1") # Split the binary string into an array of gaps
    gaps.pop() # Remove the last gap

    max_gap = 0
    for gap in gaps:
        max_gap = max(max_gap, len(gap))

    return max_gap


# Test Cases
print(binary_gap_length(9))
print(binary_gap_length(10))        
print(binary_gap_length(529))