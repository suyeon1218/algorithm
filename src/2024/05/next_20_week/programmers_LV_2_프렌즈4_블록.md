# [프렌즈 4 블록](https://school.programmers.co.kr/learn/courses/30/lessons/17679)

- 같은 블록이 4개씩 모이면 터지는 게임 구현하기

### 문제 풀이

1. 삭제할 블록이 0개면 게임을 종료한다. 매 게임라운드마다 이전 블럭을 `answer` 에 추가하고, 이번 라운드에 삭제한 블록 값을 초기화한다.

```js
let answer = 0;
let deleteBlock = 0;

do {
  answer += deleteBlock;
  deleteBlock = 0;
  // 게임 진행
} while (deleteBlock > 0);
```

2. 각 라운드는 원본 유지를 위해 복제 보드를 만들어 진행한다. 복제 보드를 순회하면서 오른쪽, 아래, 오른쪽아래가 자신과 같은 블록이면 `set` 에 추가한다.

```js
do {
  // 게임 진행
  const copyBoard = board.map((row) => [...row]);
  const set = new Set();

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
      }
    }
  }
} while (deleteBlock > 0);
```

3. set 의 개수만큼 삭제한 블록에 추가한다.

```js
deleteBlock += set.size;
```

4. 원본 블록의 값을 null 로 바꾸고, 복제 보드의 값은 그대로 유지한다.

```js
board[row][col] = null;
board[row + 1][col] = null;
board[row][col + 1] = null;
board[row + 1][col + 1] = null;
```

5. col 의 아래부터 null 의 개수를 세면서, null 이 아닌 값이 나오면 현재 있는 null 의 개수만큼 아래로 내려준다.

```js
for (let col = 0; col < n; col++) {
  for (let row = m - 1; row >= 0; row--) {
    if (board[row][col] === null) {
      nullArr[col] += 1;
    } else {
      board[row + nullArr[col]][col] = board[row][col];
    }
  }
}
```

6. 맨 위 블럭들을 null 개수만큼 null 로 바꾼다.

```js
for (let col = 0; col < n; col++) {
  for (let row = 0; row < nullArr[col]; row++) {
    board[row][col] = null;
  }
}
```

7. 게임이 종료되면 `answer` 을 반환한다.

```js
do {
  //...
} while (deleteBlock > 0);

return answer;
```
