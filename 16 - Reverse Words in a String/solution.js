function reverseWords(str) {
    // Your code here
    const words = str.trim().split(/\s+/)
    words.reverse()
    return words.join(" ")
}



// Test Cases
console.log(reverseWords(" Hello World! Welcome to JavaScript Challenges ")); // "Challenges JavaScript to Welcome World! Hello"