function getCross(line1, line2) {
  const [a, b, e] = line1;
  const [c, d, f] = line2;
  const mod = a * d - b * c;

  if (mod === 0) {
    return null;
  }
  const x = (b * f - e * d) / mod;
  const y = (e * c - a * f) / mod;

  return [x, y];
}

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
  const stars = new Set();
  let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];

  for (let i = 0; i < lines.length - 1; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      const cross = getCross(lines[i], lines[j]);
      if (cross === null) continue;
      const [x, y] = cross;

      if (x === Math.floor(x) && y === Math.floor(y)) {
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
  }

  const uniqueStars = [...stars].map((point) => {
    const [x, y] = point.split(',').map(Number);

    return [x - minX, Math.abs(y - maxY)];
  });

  return changeStar(minX, maxX, minY, maxY, uniqueStars);
}
