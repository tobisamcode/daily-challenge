def compress_string(input):
    # Your code here
    if not input:
        return input
    n = len(input)

    compressed = []
    count = 1

    for i in range(n - 1):
        # If the current character is repeated, increment the count
        if input[i] == input[i + 1]:
            count += 1
        else:
            # Store character + count & Reset count for the next character
            compressed.append(input[i] + str(count))
            count = 1

    
    # Append the last character and its count
    compressed.append(input[-1] + str(count))

    compressed_str = "".join(compressed)
    return compressed_str if len(compressed_str) < n else input

# Example
print(compress_string("aabcccccaaa")) # "a2b1c5a3"
print(compress_string("abcdef")) # "abcdef" (unchanged)
print(compress_string("aa")) # "aa" (unchanged)
print(compress_string("aabbcc")) # "aabbcc" (unchanged) 


    