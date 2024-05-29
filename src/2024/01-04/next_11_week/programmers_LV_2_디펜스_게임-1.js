function solution(n, k, enemy) {
  const totalRound = enemy.length;
  let maxRound = 0;

  if (k >= totalRound) return totalRound;

  function play(round, pass, soldier) {
    if (round >= totalRound || soldier < enemy[round]) {
      maxRound = Math.max(maxRound, round);
      return;
    }

    play(round + 1, pass, soldier - enemy[round]);
    if (pass > 0) {
      play(round + 1, pass - 1, soldier);
    }
  }

  play(0, k, n);

  return maxRound;
}

solution(7, 3, [4, 2, 4, 5, 3, 3, 1]);
