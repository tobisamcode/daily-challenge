def balance_parentheses(str):
    # Your code here
    open = 0
    insertion = 0

    for char in str:
        if char == '(':
            open += 1
        else:
            if open > 0:
                open -= 1
            else:
                insertion += 1

    return open + insertion


#   Test cases
print(balance_parentheses("((()))("))