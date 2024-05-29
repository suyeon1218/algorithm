function solution(m, n, board) {
  let answer = 0;
  let deleteBlock = 0;
  board = board.map((row) => row.split(''));

  do {
    const copyBoard = board.map((row) => [...row]);
    const nullArr = new Array(n).fill(0);
    const set = new Set();

    answer += deleteBlock;
    deleteBlock = 0;

    for (let row = 0; row < m - 1; row++) {
      for (let col = 0; col < n - 1; col++) {
        if (copyBoard[row][col] === null) continue;
        if (
          copyBoard[row][col] === copyBoard[row][col + 1] &&
          copyBoard[row][col] === copyBoard[row + 1][col] &&
          copyBoard[row][col] === copyBoard[row + 1][col + 1]
        ) {
          set.add(`${row},${col}`);
          set.add(`${row + 1},${col}`);
          set.add(`${row},${col + 1}`);
          set.add(`${row + 1},${col + 1}`);
          board[row][col] = null;
          board[row + 1][col] = null;
          board[row][col + 1] = null;
          board[row + 1][col + 1] = null;
        }
      }
    }
    deleteBlock += set.size;

    for (let col = 0; col < n; col++) {
      for (let row = m - 1; row >= 0; row--) {
        if (board[row][col] === null) {
          nullArr[col] += 1;
        } else {
          board[row + nullArr[col]][col] = board[row][col];
        }
      }
    }

    for (let col = 0; col < n; col++) {
      for (let row = 0; row < nullArr[col]; row++) {
        board[row][col] = null;
      }
    }
  } while (deleteBlock > 0);

  return answer;
}

solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']);
