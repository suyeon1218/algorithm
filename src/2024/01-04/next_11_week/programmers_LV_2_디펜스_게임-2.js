function solution(n, k, enemy) {
  let [left, right] = [0, enemy.length];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const round = enemy.slice(0, mid).sort((a, b) => b - a);
    let pass = k;

    const remainEnemy = round.reduce((prev, curr) => {
      if (pass > 0) {
        pass -= 1;
        return prev;
      }
      return prev + curr;
    }, 0);

    if (n - remainEnemy >= 0 && pass >= 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left - 1;
}

solution(7, 3, [4, 2, 4, 5, 3, 3, 1]);
