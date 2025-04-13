def roman_to_int(roman):
    values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    total = 0

    for i in range(len(roman)):
        current_val = values[roman[i]]
        next_val = values[roman[i + 1]] if i + 1 < len(roman) else 0


        print(f"current_val: {current_val}, next_val: {next_val}")

        if next_val > current_val:
            total -= current_val
            
        else:
            total += current_val

    return total

# Test Cases
print(roman_to_int("XIV"))  # 14
    
  