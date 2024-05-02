function solution(n, t, m, p) {
  const answer = [];
  let position = 0;
  let number = 0;

  while (answer.length < t) {
    const changedNumber = number.toString(n);

    for (let i = 0; i < changedNumber.length; i++) {
      if (position % m === p - 1) {
        answer.push(changedNumber[i]);
      }
      position += 1;
    }

    number += 1;
  }

  while (answer.length > t) {
    answer.pop();
  }

  return answer.map((e) => e.toUpperCase()).join('');
}
