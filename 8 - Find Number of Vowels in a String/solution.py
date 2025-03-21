def count_vowels(str):
    # Your code here

    # Define a set of vowels (both uppercase and lowercase)
    vowels = set("aeiouAEIOU")
    count = 0

    for char in str:
        if char in vowels:
            count += 1

    return count

# TEST CASES    
print(count_vowels("Hello World")) # 3 