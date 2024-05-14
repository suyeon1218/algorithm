# [N Queen](https://school.programmers.co.kr/learn/courses/30/lessons/12952)

### 문제설명

- queen 을 서로 공격할 수 없게끔 놓는 경우의 수를 반환하는 문제

### 문제 풀이

- `row` 를 1씩 증가시키면서 해당 `row` 의 `col` 중 다음 조건에 맞는 곳에 퀸을 놓는다.
  ```js
  function dfs(row, board) {
    for (col = 0; col < n; col++) {
      // 조건에 만족하면 현재 row, col 위치를 true 로 택한다.
      const newBoard = board.map(el => [...el]);
      newBoard[col] = true;
      dfs(row + 1, newBoard;)
    }
  }
  ```
  - 조건 1. 현재 열에 아무런 퀸도 없는 경우
    ```js
    function colRight(board, row, col) {
      while (row > 0) {
        if (board[row][col] === true) {
          // 이미 퀸이 있는 경우
          return false;
        }
        row -= 1;
      }
      return true;
    }
    ```
  - 조건 2~5. 4방향의 대각선에 아무런 퀸도 없는 경우
    ```js
    // 대각선 윗 + 왼쪽 방향
    function upLeftRight(board, row, col) {
      while (row > 0 && col > 0) {
        if (board[row][col] === true) {
          return falsel;
        }
        row -= 1;
        col -= 1;
      }
    }
    // 같은 방식으로 모든 대각선에 대해 검사를 진행한다.
    ```
