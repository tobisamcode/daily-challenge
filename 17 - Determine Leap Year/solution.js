function isLeapYear(year) {
    // Your code here
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}



// Test Cases
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2001)); // false
console.log(isLeapYear(2100)); // true
console.log(isLeapYear(1900)); // false