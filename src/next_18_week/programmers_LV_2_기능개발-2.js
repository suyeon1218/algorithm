function solution(progresses, speeds) {
  const calTime = (index) => {
    return Math.ceil((100 - progresses[index]) / speeds[index]);
  };

  const result = [];
  let maxTime = calTime(0);
  let left = 0;
  let right = 1;

  while (right < progresses.length) {
    const currTime = calTime(right);

    if (maxTime >= currTime) {
      right += 1;
    } else {
      result.push(right - left);
      left = right;
      right += 1;
      maxTime = currTime;
    }
  }
  result.push(right - left);

  return result;
}
