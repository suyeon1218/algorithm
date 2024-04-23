// ! 걍 바보 같이 풀어서 안 됐던 거였음

function checkPlace(place) {
  place = place.map((row) => row.split(''));
  function isOutOfBound(row, col) {
    return row < 0 || col < 0 || row >= 5 || col >= 5;
  }

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (place[row][col] === 'P') {
        const stack = [[row, col, 0]];

        while (stack.length > 0) {
          const [currRow, currCol, distance] = stack.pop();

          if (distance > 2) {
            continue;
          }
          if (isOutOfBound(currRow, currCol)) {
            continue;
          }
          if (place[currRow][currCol] === 'X') {
            continue;
          }
          if (distance > 0 && place[currRow][currCol] === 'P') {
            return 0;
          }

          place[currRow][currCol] = 'X';
          // ! 여기서 currRow, currCol 이 아니라 ㅋ ㅠㅠ..row, col 로 넣어줌...바보아니냐
          stack.push([currRow + 1, currCol, distance + 1]);
          stack.push([currRow - 1, currCol, distance + 1]);
          stack.push([currRow, currCol - 1, distance + 1]);
          stack.push([currRow, currCol + 1, distance + 1]);
        }
      }
    }
  }

  return 1;
}

function solution(places) {
  const answer = [];

  for (const place of places) {
    answer.push(checkPlace(place));
  }

  return answer;
}

solution([['POOPO', 'OOOOO', 'OOOXP', 'OPOPX', 'OOOOO']]);
