function solution(k, tangerines) {
  const memo = {};
  let answer = 0;

  tangerines.forEach((size) => {
    if (memo[size] === undefined) {
      memo[size] = 0;
    }
    memo[size] += 1;
  });

  const sizes = Object.keys(memo).sort((a, b) => memo[b] - memo[a]);

  for (let i = 0; i < sizes.length; i++) {
    if (k > 0) {
      k -= memo[sizes[i]];
      answer += 1;
    } else {
      return answer;
    }
  }

  return answer;
}
