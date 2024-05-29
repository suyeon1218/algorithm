// ? x 당 y 가 어디서 최대인지 알고 싶어서 이진탐색 이용

function solution(k, d) {
  const point = [...new Array(Math.floor(d / k) + 1)].map(
    (_, index) => index * k,
  );
  let answer = 0;
  let x = 0;

  while (x < point.length) {
    let start = 0;
    let end = point.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (point[x] ** 2 + point[mid] ** 2 > d ** 2) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    answer += start;
    x += 1;
  }

  return answer;
}
