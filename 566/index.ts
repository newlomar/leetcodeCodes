function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const isLegal = mat.length * mat[0].length === r * c;
  if (!isLegal) {
    return mat;
  }

  let currentLine = 0;
  let currentColumn = 0;

  const reshapedMatrix: number[][] = [];

  for (let i = 0; i < r; i++) {
    reshapedMatrix.push([]);

    for (let j = 0; j < c; j++) {
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

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
);

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    4,
    1
  )
);

console.log(
  matrixReshape(
    [
      [2, 5, 8],
      [4, 0, -1],
    ],
    1,
    6
  )
);
