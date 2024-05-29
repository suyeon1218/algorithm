// * 단순 실수

function makeGrid(rows, columns) {
  const grid = [...new Array(rows)].map(() => new Array(columns));
  let num = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      grid[i][j] = num++;
    }
  }

  return grid;
}

function solution(rows, columns, queries) {
  const answer = [];
  const grid = makeGrid(rows, columns);
  queries = queries.map((query) => query.map((num) => num - 1));

  for (const query of queries) {
    const [startRow, startCol, endRow, endCol] = query;
    const startNum = grid[startRow][startCol];
    let minNum = startNum;

    // 1. startCol 하나씩 올리기
    for (let row = startRow; row < endRow; row++) {
      minNum = Math.min(minNum, grid[row + 1][startCol]);
      grid[row][startCol] = grid[row + 1][startCol];
    }

    // 2. endRow 하나씩 왼쪽으로 옮기기
    for (let col = startCol; col < endCol; col++) {
      minNum = Math.min(minNum, grid[endRow][col + 1]);
      grid[endRow][col] = grid[endRow][col + 1];
    }

    // 3. endCol 하나씩 아래로 내리기
    for (let row = endRow; row > startRow; row--) {
      minNum = Math.min(minNum, grid[row - 1][endCol]);
      grid[row][endCol] = grid[row - 1][endCol];
    }

    // 4. startRow 하나씩 오른쪽으로 옮기기
    for (let col = endCol; col > startCol; col--) {
      minNum = Math.min(minNum, grid[startRow][col - 1]);
      grid[startRow][col] = grid[startRow][col - 1];
    }

    grid[startRow][startCol + 1] = startNum;
    answer.push(minNum);
  }

  return answer;
}
