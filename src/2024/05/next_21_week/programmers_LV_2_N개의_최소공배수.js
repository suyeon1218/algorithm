function solution(arr) {
  let answer = 1;

  for (let num of arr) {
    let a = answer;
    let b = num;

    while (a % b !== 0) {
      const divide = a % b;
      a = b;
      b = divide;
    }
    answer = (answer * num) / b;
  }
  return answer;
}
