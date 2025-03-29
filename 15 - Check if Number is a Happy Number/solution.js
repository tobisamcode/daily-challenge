function isHappy(n) {
    // Set to keep track of numbers we've seen
    const seen = new Set();

    // Continue until we reach either 1 or detect a cycle
    while (n !== 1 && !seen.has(n)) {
        // Add the current number to the set
        seen.add(n);

        // Get the sum of the squares of the digits
        n = String(n).split('').map(Number).reduce((sum, digit) => sum + digit * digit, 0);
    }

    // Return true if we've reached 1 or a cycle
    return n === 1;

}

// Test Cases
console.log(isHappy(19)); // true