def find_longest_substring(string):
    # Your code here
    max_length = 0
    start = 0
    seen = dict()

    for end in range(len(string)):
        char = string[end]

        if char in seen and seen[char] >= start:
            start = seen[char] + 1

        seen[char] = end

        max_length = max(max_length, end - start + 1)

    return max_length


#   Test cases
print(find_longest_substring("abcabcbb"))