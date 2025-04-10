function balanceParentheses(str) {
  // Your code here
  let open = 0;
  let insertion = 0;

  for (char of str) {
    if (char === "(") {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        insertion++;
      }
    }
  }

  return open + insertion;
}

//   Test cases
console.log(balanceParentheses("((()))("));
