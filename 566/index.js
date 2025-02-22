function matrixReshape(mat, r, c) {
    var isLegal = mat.length * mat[0].length === r * c;
    if (!isLegal) {
        return mat;
    }
    var currentLine = 0;
    var currentColumn = 0;
    var reshapedMatrix = [];
    for (var i = 0; i < r; i++) {
        reshapedMatrix.push([]);
        for (var j = 0; j < c; j++) {
            if (typeof mat[currentLine][currentColumn] === "undefined") {
                currentLine++;
                currentColumn = 0;
            }
            reshapedMatrix[i][j] = mat[currentLine][currentColumn];
            currentColumn++;
        }
    }
    return reshapedMatrix;
}
console.log(matrixReshape([
    [1, 2],
    [3, 4],
], 1, 4));
console.log(matrixReshape([
    [1, 2],
    [3, 4],
], 2, 4));
console.log(matrixReshape([
    [1, 2],
    [3, 4],
], 4, 1));
console.log(matrixReshape([
    [2, 5, 8],
    [4, 0, -1],
], 1, 6));
