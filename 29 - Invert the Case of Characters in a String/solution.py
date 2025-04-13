def invert_case(s):
    result = ""

    for char in s:
        if char.islower():
            result += char.upper()
        elif char.isupper():
            result += char.lower()
        else:
            result += char

    return result

# Test Cases    
print(invert_case("Hello, World!"))  # hELLO, wORLD!