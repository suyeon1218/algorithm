function solution(n) {
  const arr = [...new Array(n)].map((_, index) => new Array(index + 1).fill(0));

  const dfs = (startRow, endRow, startCol, endCol) => {
    if (startRow > endRow && startCol > endCol) {
      return;
    }

    for (let row = startRow; row <= endRow; row++) {
      if (row === 0) {
        arr[startRow][startCol] = 1;
      } else {
        arr[row][startCol] = arr[row - 1][startCol] + 1;
      }
    }

    for (let col = startCol + 1; col <= endCol; col++) {
      arr[endRow][col] = arr[endRow][col - 1] + 1;
    }

    for (
      let [row, col] = [endRow - 1, endCol - 1];
      row > startRow && col > startCol;

    ) {
      arr[row][col] = arr[row + 1][col + 1] + 1;
      row -= 1;
      col -= 1;
    }

    dfs(startRow + 2, endRow - 1, startCol + 1, endCol - 2);
  };

  dfs(0, n - 1, 0, n - 1);

  return arr.flat();
}

solution(6);
