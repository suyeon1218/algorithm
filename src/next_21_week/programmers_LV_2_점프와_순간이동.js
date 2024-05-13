function solution(n) {
  let count = 1;

  while (n > 1) {
    if (n % 2 === 0) {
      n = n >> 1;
    } else {
      n = n >> 1;
      count += 1;
    }
  }

  return count;
}
