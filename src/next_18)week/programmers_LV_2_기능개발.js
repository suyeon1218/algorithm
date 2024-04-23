function solution(processes, speeds) {
  const result = [];

  for (let i = 0; i < processes.length; i++) {
    const days = Math.ceil((100 - processes[i]) / speeds[i]);
    let count = 1;

    for (let j = i; j < processes.length; j++) {
      processes[j] += speeds[j] * days;
    }

    while (processes[i + 1] >= 100) {
      count += 1;
      i += 1;
    }
    result.push(count);
  }

  return result;
}
