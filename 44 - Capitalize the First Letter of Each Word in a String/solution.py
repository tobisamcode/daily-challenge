def capitalize_first_letter(sentence):
    return " ".join([word[0].upper() + word[1:] for word in sentence.split(" ")])


print(capitalize_first_letter("hello world"))  # "Hello World"