# [주식가격](https://school.programmers.co.kr/learn/courses/30/lessons/42584)

- 주식이 떨어지지 않은 시간이 몇 초인지 구하는 문제
  ```
  [5, 8, 6, 2, 4, 1]
  => [3, 1, 1, 2, 1, 0]
  ```

### 문제 풀이 - 스택

- stack 을 선언한다. stack 에는 현재 주식 이전의 주식들이 들어있다.

  ```js
  const stack = [];
  ```

- 주식가격을 차례대로 순회한다.

  ```js
  for (let i = 0; i < prices.length; i++) {
    // ...
  }
  ```

- 만일 stack 의 마지막 값이 현재 주식인 `prices[i]` 보다 크다면 해당 주식은 `i` 까지만 가격이 유지됨을 의미한다.

  ```js
  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prcies[stack.at(-1)] > prices[i]) {
      answer.push(i - stack.pop());
    }
    stack.push(i);
  }
  ```

  ```
  [5, 8, 6] 의 경우
  // 5
  // stack: [0]

  // 8
  // stack: [0, 1]

  // 6
  // prices[1]은 prices[2] prices[1] 의 주식은 2 - 1 만큼 유지된다.
  // answer: [1]
  // stack: [0, 2]
  ```

- stack 에 남아 있는 값은 끝가지 가격이 떨어지지 않은 경우를 의미한다.
  ```js
  while (stack.length > 0) {
    answer.push(prices.length - 1 - stack.pop());
  }
  ```
