// ! 0 을 기준으로 나누는 거라면 다음과 같이 나눌 수도 있음

function isPrimary(num) {
  let number = Number(num);
  const maxNum = Math.sqrt(number);

  if (number === 1) return false;

  for (let i = 2; i <= maxNum; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  n = n.toString(k).split('0');

  return n.filter((num) => isPrimary(num)).length;
}
