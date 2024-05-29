// ! 이렇게 푸는 게 맞음...
// ? 그냥 거리 구하는 방식으로 y 정수최대점 구해서 k 로 나누면 되는 문제였음

function solution(k, d) {
  let total = 0;

  for (let x = 0; x <= d; x += k) {
    const y = Math.sqrt(d * d - x * x);
    total += Math.floor(y / k) + 1;
  }

  return total;
}
