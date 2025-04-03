def sum_main_diagonal(matrix):
    # Your code here
    diagonal_sum = 0
    for row in range(len(matrix)):
        diagonal_sum += matrix[row][row]

    return diagonal_sum

#   Test cases    
print(sum_main_diagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
