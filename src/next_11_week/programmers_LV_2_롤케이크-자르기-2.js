// ! 정답

// ? 2N 순회로 풀 수 있는 문제
// 처음부터 한쪽에 몰아주고 하나씩 제외시키면서 비교하는 문제

function solution(toppings) {
  const toppingDict1 = {};
  const toppingDict2 = {};
  let topping1 = 0;
  let topping2 = 0;
  let answer = 0;

  for (const topping of toppings) {
    if (toppingDict1[topping] === undefined) {
      topping1 += 1;
      toppingDict1[topping] = 0;
    }
    toppingDict1[topping] += 1;
  }

  for (const topping of toppings) {
    if (toppingDict2[topping] === undefined) {
      topping2 += 1;
      toppingDict2[topping] = 0;
    }
    toppingDict2[topping] += 1;
    toppingDict1[topping] -= 1;

    if (toppingDict1[topping] === 0) {
      topping1 -= 1;
    }

    if (topping1 === topping2) {
      answer += 1;
    }
  }

  return answer;
}
