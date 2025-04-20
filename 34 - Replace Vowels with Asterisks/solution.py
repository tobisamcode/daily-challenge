def replace_vowels(str):
        vowels = "aeiouAEIOU"
        result = ""

        for char in str:
            if char in vowels:
                result += "*"
            else:
                result += char

        return result


# Test Cases
print(replace_vowels('hello World'))