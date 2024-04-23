// ! for 문 4개써야 하나 뭐 해야하나 싶었는데 그냥 DFS 문제... 이거 재밌는듯??

function solution(arr) {
  let countZero = 0;
  let countOne = 0;

  const dfs = (area, currRow, currCol) => {
    if (area === 1) {
      arr[currRow][currCol] === 1 ? countOne++ : countZero++;
      return;
    }

    const set = new Set();

    for (let row = currRow; row < currRow + area; row++) {
      for (let col = currCol; col < currCol + area; col++) {
        set.add(arr[row][col]);
      }
    }

    if (set.size === 1) {
      dfs(1, currRow, currCol);
    } else {
      const nextArea = area / 2;

      dfs(nextArea, currRow, currCol);
      dfs(nextArea, currRow, currCol + nextArea);
      dfs(nextArea, currRow + nextArea, currCol);
      dfs(nextArea, currRow + nextArea, currCol + nextArea);
    }
  };

  dfs(arr.length, 0, 0);

  return [countZero, countOne];
}
