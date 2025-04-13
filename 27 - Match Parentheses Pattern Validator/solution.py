def is_valid_parentheses(s):
    stack = []

    for char in s:
        if char == "(":
            stack.append(char)
        elif char == ")":
            if len(stack) == 0:
                return False
            stack.pop()
    

    return len(stack) == 0

# Test Cases
print(is_valid_parentheses("(abc)(de)f)g"))  # false