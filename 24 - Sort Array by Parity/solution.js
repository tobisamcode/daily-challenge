function sortArrayByParity(nums) {
  // Your code here
  let evens = [];
  let odds = [];

  for (let num of nums) {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  return [...evens, ...odds];
}

//   Test cases
console.log(sortArrayByParity([3, 1, 2, 4]));
