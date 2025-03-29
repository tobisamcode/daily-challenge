def reverse_words(s):
    return " ".join(s.strip().split()[::-1])


# Test Cases
print(reverse_words(" Hello World! Welcome to JavaScript Challenges ")) # "Challenges JavaScript to Welcome World! Hello"