function solution(wants, numbers, discount) {
  const totalDiscount = discount.length;
  const memo = {};

  wants.forEach((want, index) => {
    memo[want] = numbers[index];
  });

  let answer = 0;

  for (let i = 0; i <= totalDiscount - 10; i++) {
    const copiedMemo = { ...memo };
    let count = 0;

    for (let day = i; day < i + 10; day++) {
      const todayDiscount = discount[day];

      if (copiedMemo[todayDiscount] === undefined) {
        break;
      }
      if (copiedMemo[todayDiscount] > 0) {
        copiedMemo[todayDiscount] -= 1;
        count += 1;
      } else {
        break;
      }
    }
    if (count === 10) {
      answer += 1;
    }
  }

  return answer;
}
