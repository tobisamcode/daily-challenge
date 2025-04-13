function isValidParentheses(str) {
  let stack = [];

  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

// Test Cases
console.log(isValidParentheses("(abc)(de)f)g")); // false
