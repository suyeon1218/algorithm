// * 반례! -> '))' 인 경우.. open bracket 의 짝을 못 찾은 경우에도 stack 에 push 해줘야함

function isCorrect(s) {
  const copied = [...s];
  const stack = [];
  const close = [']', ')', '}'];

  while (copied.length > 0) {
    const bracket = copied.pop();

    if (close.includes(bracket)) {
      stack.push(bracket);
      continue;
    }

    if (bracket === '(') {
      if (stack[stack.length - 1] === ')') {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else if (bracket === '[') {
      if (stack[stack.length - 1] === ']') {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else {
      if (stack[stack.length - 1] === '}') {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    }
  }

  return stack.length === 0 ? true : false;
}

function solution(s) {
  let answer = 0;
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    const braket = s.shift();
    s.push(braket);

    if (isCorrect(s)) {
      answer += 1;
    }
  }

  return answer;
}
