function flatterArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatterArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

// Test Cases
console.log(flatterArray([1, [2, [3, [4, 5], 6], 7], 8]));
