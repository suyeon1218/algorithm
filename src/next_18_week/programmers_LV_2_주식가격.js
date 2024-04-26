function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];
  const pricesLen = prices.length;

  for (let i = 0; i < pricesLen; i++) {
    // 스택의 마지막 값이 현재 값보다 큰 경우
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const temp = stack.pop();
      answer[temp] = i - temp; // i 번째에서 temp 값이 떨어졌으므로 i - temp 만큼 유지됨
    }
    stack.push(i);
  }

  while (stack.length) {
    // 남은 stack 값
    const temp = stack.pop();
    answer[temp] = pricesLen - temp - 1; // 가격이 떨어지지 않은 경우
  }

  return answer;
}

solution([5, 8, 6, 2, 4, 1]);
