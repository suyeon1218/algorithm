// ! 시간 초과

function solution(topping) {
  let answer = 0;

  for (let i = 0; i < topping.length; i++) {
    const cake1 = new Set(topping.slice(0, i));
    const cake2 = new Set(topping.slice(i));

    if (cake1.size === cake2.size) {
      answer += 1;
    }
  }

  return answer;
}
