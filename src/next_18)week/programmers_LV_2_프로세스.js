function solution(priorities, location) {
  let count = 0;
  let maxPriority = Math.max(...priorities);

  while (priorities.length > 0) {
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] === maxPriority) {
        count += 1;
        priorities[i] = 0;

        if (i === location) {
          return count;
        }

        maxPriority = Math.max(...priorities);
      }
    }
  }

  return count;
}
