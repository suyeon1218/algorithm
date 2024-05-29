function sum(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

function solution(queue1, queue2) {
  const n = queue1.length;
  let sum1 = sum(queue1);
  let sum2 = sum(queue2);
  let index1 = 0;
  let index2 = 0;

  if ((sum1 + sum2) % 2 !== 0) return -1;

  // ! 2n + 2 가 최대
  while (index1 + index2 <= 2 * n + 2) {
    console.log(`index1: ${index1} index2: ${index2}`);
    console.log(`sum1: ${sum1} sum2: ${sum2}`);
    console.log('---------------');
    if (sum1 === sum2) {
      console.log(index1 + index2);
      return index1 + index2;
    } else if (sum1 > sum2) {
      if (index1 < queue1.length) {
        sum1 -= queue1[index1];
        sum2 += queue1[index1];
      } else {
        // ! 일단 여기 오타냈었음
        sum1 -= queue2[index1 - n];
        sum2 += queue2[index1 - n];
      }
      index1 += 1;
    } else {
      if (index2 < queue1.length) {
        sum1 += queue2[index2];
        sum2 -= queue2[index2];
      } else {
        sum1 += queue1[index2 - n];
        sum2 -= queue1[index2 - n];
      }
      index2 += 1;
    }
  }

  return -1;
}

// ! 반례
solution([1, 1, 1, 8, 10, 9], [1, 1, 1, 1, 1, 1]);
