function getRow(rowIndex: number): number[] {
  function generate(numRows: number): number[][] {
    const arr: number[][] = [];
    for (let i = 0; i < numRows; i++) {
      if (i === 0) {
        arr.push([1]);
        continue;
      }

      for (let j = 0; j < i + 1; j++) {
        if (j === 0) {
          arr[i] = [];
          arr[i].push(1);
          continue;
        } else if (j === arr[i - 1].length) {
          arr[i].push(1);
          continue;
        }
        arr[i].push(arr[i - 1][j - 1] + arr[i - 1][j]);
      }
    }
    return arr;
  }

  return generate(rowIndex + 1)[rowIndex];
}

console.log(getRow(3));
