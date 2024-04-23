// ! 테스트 케이스 하나만 불통과하는 경우 나눗셈 정밀도 생각해보기

function solution(w, h) {
  // const inclination = h / w;
  let count = 0;

  for (let x1 = 0; x1 < w; x1++) {
    const x2 = x1 + 1;
    const y1 = Math.floor((h * x1) / w);
    const y2 = Math.floor((h * x2) / w);

    count += Math.min(y1, y2);
  }

  return count * 2;
}
