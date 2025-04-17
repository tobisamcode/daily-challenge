def to_camel_case(str):
    parts = str.split("_")
    camel_case = parts[0].lower()

    for part in parts[1:]:
        camel_case += part.capitalize()

    return camel_case

# Test Cases
print(to_camel_case("snake_case"))  # SnakeCase