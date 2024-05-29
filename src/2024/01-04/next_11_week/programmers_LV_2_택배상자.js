function solution(order) {
  const stack = [];
  let currBox = 1;
  let answer = 0;

  for (let i = 0; i < order.length; i++) {
    while (currBox < order[i]) {
      stack.push(currBox);
      currBox += 1;
    }
    if (stack.length > 0 && stack[stack.length - 1] === order[i]) {
      stack.pop();
      answer += 1;
    } else if (order[i] === currBox) {
      answer += 1;
      currBox += 1;
    } else {
      break;
    }
  }

  return answer;
}
