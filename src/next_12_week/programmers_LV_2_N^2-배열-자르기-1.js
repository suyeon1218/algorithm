// ! 첫번째 풀이방법 -> 배열 초과 (core dumped)

function solution(n, left, right) {
  const matrix = [...new Array(n)].map(() => new Array(n).fill(0));
  const arr = [];

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][col] = Math.max(row, col) + 1;
      }
    }

    arr.push(...matrix[row]);
  }

  return arr.slice(left, right + 1);
}
