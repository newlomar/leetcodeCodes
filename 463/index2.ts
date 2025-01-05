function islandPerimeter2(grid: number[][]): number {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid.length === 1) {
        if (grid[i][j]) {
          perimeter += 2;
        }
        if (
          grid[i][j] &&
          (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined)
        ) {
          perimeter++;
        }

        if (
          grid[i][j] &&
          (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined)
        ) {
          perimeter++;
        }
        continue;
      }

      if (grid[i][j]) {
        perimeter += 4;
      }
      if (grid[i][j] && grid[i][j - 1] === 1) {
        perimeter--;
      }
      if (grid[i][j] && grid[i][j + 1] === 1) {
        perimeter--;
      }

      if (grid[i][j] && grid[i - 1] && grid[i - 1][j] === 1) {
        perimeter--;
      }

      if (grid[i][j] && grid[i + 1] && grid[i + 1][j] === 1) {
        perimeter--;
      }

      console.log(i, j, perimeter);
    }
  }

  return perimeter;
}

console.log(
  islandPerimeter2([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
console.log(islandPerimeter2([[1]]));
console.log(islandPerimeter2([[1, 0]]));
console.log(islandPerimeter2([[0, 1]]));
