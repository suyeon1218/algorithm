// ! 4, 7, 8, 21, 28 런타임 에러 발생
// * 해결 -> mod 가 0 인 경우를 계산하지 않아서 생긴 문제
// * Math.floor(x) === x 인지 비교하는 식 자체엔 문제가 없었다

function changeStar(minX, maxX, minY, maxY, stars) {
  const matrix = [...new Array(maxY - minY + 1)].map(() =>
    new Array(maxX - minX + 1).fill('.'),
  );

  for (const [x, y] of stars) {
    matrix[y][x] = '*';
  }

  return matrix.map((line) => line.join(''));
}

function solution(lines) {
  const lineLen = lines.length;
  const stars = new Set();
  let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];

  if (lineLen === 2) {
    return ['*'];
  }

  for (let i = 0; i < lineLen - 1; i++) {
    for (let j = i + 1; j < lineLen; j++) {
      const [a, b, e] = lines[i];
      const [c, d, f] = lines[j];
      const mod = a * d - b * c;
      const xNum = b * f - e * d;
      const yNum = e * c - a * f;

      if (mod === 0) {
        continue;
      }
      if (xNum % mod || yNum % mod) {
        continue;
      }

      const [x, y] = [xNum / mod, yNum / mod];
      stars.add(`${x},${y}`);

      if (minX > x) {
        minX = x;
      }
      if (minY > y) {
        minY = y;
      }
      if (maxX < x) {
        maxX = x;
      }
      if (maxY < y) {
        maxY = y;
      }
    }
  }

  const uniqueStars = [...stars].map((point) => {
    const [x, y] = point.split(',').map(Number);

    return [x - minX, Math.abs(y - maxY)];
  });

  return changeStar(minX, maxX, minY, maxY, uniqueStars);
}

solution([
  [0, 1, -1],
  [1, 0, -1],
  [1, 0, 1],
]);
