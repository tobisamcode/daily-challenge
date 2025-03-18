def first_non_repeated_word(sentence):
    words = sentence.split()
    word_count = {}

    for word in words:
        word_count[word] = word_count.get(word, 0) + 1

    for word in words:
        if word_count[word] == 1:
            return word
        
    return ''



# Example usage
sentence = "this is a test this test is fun"
result = first_non_repeated_word(sentence)
print(result)  # Output: "a"