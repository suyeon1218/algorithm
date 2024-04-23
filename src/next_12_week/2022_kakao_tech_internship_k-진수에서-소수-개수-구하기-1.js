// ! 진짜 단순히... 0 아닐 때만 골라서 추려내면 되는 문제

function isPrimary(arr) {
  let number = Number(arr.join(''));
  const maxNum = Math.sqrt(number);

  if (number === 1) return false;

  for (let i = 2; i <= maxNum; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  let answer = 0;
  n = n.toString(k).split('0').reverse();

  while (n.length > 0) {
    const primary = [];
    let currNum = n.pop();

    if (currNum !== '0') {
      primary.push(currNum);
      while (n.length > 0) {
        currNum = n.pop();

        if (currNum === '0') {
          break;
        }
        primary.push(currNum);
      }

      if (isPrimary(primary)) {
        answer += 1;
      }
    }
  }

  return answer;
}
