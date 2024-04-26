function solution(brown, yellow) {
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      const [width, height] = [yellow / i, i];
      const around = width * 2 + height * 2 + 4;

      if (around === brown) return [width + 2, height + 2];
    }
  }

  return [0, 0];
}
