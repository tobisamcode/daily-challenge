def  longest_common_prefix(strs):
    if len(strs) == 0:
        return ''
    
    prefix = strs[0]

    for i in range (1, len(strs)):
        while not strs[i].startswith(prefix):
            prefix = prefix[:-1]
            if len(prefix) == 0:
                return ''
    
    return prefix





# Example usage
print(longest_common_prefix(["flower", "flow", "flight"]))  # Output: "fl"
print(longest_common_prefix(["dog", "racecar", "car"]))  # Output: ""
print(longest_common_prefix(["interstellar", "internet", "internal"]))  # Output: "inte"
print(longest_common_prefix(["apple", "ape", "april"]))  # Output: "ap"
