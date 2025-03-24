def rotate_matrix(matrix):
    # Your code here

    n = len(matrix)

    # Step 1: Transpose the matrix (swap matrix[i][j] with matrix[j][i])
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        
    # Step 2: Rotate the matrix 90 degrees clockwise
    for i in range(n):
        matrix[i].reverse()

    return matrix

# Example
print(rotate_matrix([
        [1, 2, 3, 4], 
        [5, 6, 7, 8], 
        [9, 10, 11, 12], 
        [13, 14, 15, 16]
    ])
)