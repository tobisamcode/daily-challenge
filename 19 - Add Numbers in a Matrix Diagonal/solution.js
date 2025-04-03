function sumMainDiagonal(matrix) {
  // Your code here
  let diagonalSum = 0;
  for (let i = 0; i < matrix.length; i++) {
    diagonalSum += matrix[i][i];
  }

  return diagonalSum;
}

//   Test cases
console.log(
  sumMainDiagonal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
