function solution(k, ranges) {
  const y = [k];
  const area = [];
  const result = [];

  while (k !== 1) {
    if (k % 2 === 0) {
      k /= 2;
    } else {
      k *= 3;
      k += 1;
    }
    y.push(k);
  }

  for (let i = 0; i < y.length - 1; i++) {
    area.push((y[i] + y[i + 1]) / 2);
  }

  for (const range of ranges) {
    const [start, end] = range;
    let sum = 0;

    if (start > y.length + end - 1) {
      result.push(-1);
      continue;
    }
    for (let i = start; i < y.length - 1 + end; i++) {
      sum += area[i];
    }

    result.push(sum);
  }

  return result;
}
