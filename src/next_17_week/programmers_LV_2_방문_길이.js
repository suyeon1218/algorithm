function isOutOfBound([x, y]) {
  return x < -5 || x > 5 || y < -5 || y > 5;
}

function solution(dirs) {
  const curr = [0, 0];
  const memo = new Set();
  let distance = 0;

  for (const dir of dirs) {
    const next = [...curr];

    if (dir === 'U') {
      next[1] += 1;
    }
    if (dir === 'D') {
      next[1] -= 1;
    }
    if (dir === 'L') {
      next[0] -= 1;
    }
    if (dir === 'R') {
      next[0] += 1;
    }

    if (isOutOfBound(next)) {
      continue;
    }

    const currStr = curr.join();
    const nextStr = next.join();

    if (!memo.has(`${currStr}${nextStr}`)) {
      distance += 1;
      memo.add(`${currStr}${nextStr}`);
      memo.add(`${nextStr}${currStr}`);
    }
    curr[0] = next[0];
    curr[1] = next[1];
  }

  return distance;
}
