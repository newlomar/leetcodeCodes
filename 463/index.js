function islandPerimeter(grid) {
    var perimeter = 0;
    function checkSquarePosition(i, j) {
        if (i === 0 && j === 0) {
            return "fl_fc"; // first_line_first_column
        }
        if (i === grid.length - 1 && j === grid[i].length - 1) {
            return "ll_lc"; // last_line_last_column
        }
        if (i === 0 && j === grid[i].length - 1) {
            return "fl_lc"; // first_line_last_column
        }
        if (i === grid.length - 1 && j === 0) {
            return "ll_fc"; // last_line_first_column
        }
        if (i === 0 && j !== 0 && j !== grid[i].length - 1) {
            return "fl_mc"; // first_line_middle_column
        }
        if (i !== 0 && i !== grid.length - 1 && j === 0) {
            return "ml_fc"; // middle_line_first_column
        }
        if (i !== 0 && i !== grid.length - 1 && j === grid[i].length - 1) {
            return "ml_lc"; // middle_line_last_column
        }
        if (i === grid.length - 1 && j !== grid[i].length - 1 && j !== 0) {
            return "ll_mc"; // last_line_middle_column
        }
        if (i !== grid.length - 1 &&
            i !== 0 &&
            j !== grid[i].length - 1 &&
            j !== 0) {
            return "ml_mc"; // middle_line_middle_column
        }
    }
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid.length === 1) {
                if (grid[i][j]) {
                    perimeter += 2;
                }
                if (grid[i][j] &&
                    (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined)) {
                    perimeter++;
                }
                if (grid[i][j] &&
                    (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined)) {
                    perimeter++;
                }
                continue;
            }
            switch (checkSquarePosition(i, j)) {
                case "fl_fc":
                    if (grid[i][j]) {
                        perimeter += 2;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i + 1][j] === 0 || grid[i + 1][j] === undefined)) {
                        perimeter++;
                    }
                    break;
                case "ll_lc":
                    if (grid[i][j]) {
                        perimeter += 2;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i - 1][j] === 0 || grid[i - 1][j] === undefined)) {
                        perimeter++;
                    }
                    break;
                case "fl_lc":
                    if (grid[i][j]) {
                        perimeter += 2;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i + 1][j] === 0 || grid[i + 1][j] === undefined)) {
                        perimeter++;
                    }
                    break;
                case "ll_fc":
                    if (grid[i][j]) {
                        perimeter += 2;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i - 1][j] === 0 || grid[i - 1][j] === undefined)) {
                        perimeter++;
                    }
                    break;
                case "fl_mc":
                    if (grid[i][j]) {
                        perimeter += 1;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i + 1][j] === 0 || grid[i + 1][j] === undefined)) {
                        perimeter++;
                    }
                    break;
                case "ml_fc":
                    if (grid[i][j]) {
                        perimeter += 1;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i - 1][j] === 0 || grid[i - 1][j] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i + 1][j] === 0 || grid[i + 1][j] === undefined)) {
                        perimeter++;
                    }
                    break;
                case "ml_lc":
                    if (grid[i][j]) {
                        perimeter += 1;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i - 1][j] === 0 || grid[i - 1][j] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i + 1][j] === 0 || grid[i + 1][j] === undefined)) {
                        perimeter++;
                    }
                    break;
                case "ll_mc":
                    if (grid[i][j]) {
                        perimeter += 1;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i - 1][j] === 0 || grid[i - 1][j] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined)) {
                        perimeter++;
                    }
                    break;
                case "ml_mc":
                    if (grid[i][j] === 1 &&
                        (grid[i - 1][j] === 0 || grid[i - 1][j] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i + 1][j] === 0 || grid[i + 1][j] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined)) {
                        perimeter++;
                    }
                    if (grid[i][j] === 1 &&
                        (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined)) {
                        perimeter++;
                    }
                    break;
                default:
                    break;
            }
            console.log({ i: i, j: j, perimeter: perimeter });
        }
    }
    return perimeter;
}
console.log(islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
]));
console.log(islandPerimeter([[1]]));
console.log(islandPerimeter([[1, 0]]));
console.log(islandPerimeter([[0, 1]]));
