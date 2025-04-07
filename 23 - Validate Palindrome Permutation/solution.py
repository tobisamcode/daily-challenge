def can_form_palindrome(str):
    # Your code here

    cleaned = str.lower().replace(" ", "").replace("\n", "").replace("\t", "")
    freq = {}

    for char in cleaned:
        freq[char] = freq.get(char, 0) + 1

    odd_count = 0

    for count in freq.values():
        if count % 2 != 0:
            odd_count += 1

        if odd_count > 1:
            return False
    return True


#   Test cases
print(can_form_palindrome("Tact Coa"))



