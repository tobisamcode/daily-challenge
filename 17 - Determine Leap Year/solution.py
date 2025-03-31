def is_leap_year(year):
    # Your code here
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# Test Cases
print(is_leap_year(2000)) # True
print(is_leap_year(2001)) # False
print(is_leap_year(2100)) # True
print(is_leap_year(1900)) # False