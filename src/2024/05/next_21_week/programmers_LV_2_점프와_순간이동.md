# [점프와 순간이동](https://school.programmers.co.kr/learn/courses/30/lessons/12980)

- 문제의 규칙에 따라 점프와 순간이동을 하면서 쓰는 배터리가 있을 때, 특정 거리 N 이 주어진다.
- 거리에 도달하기까지의 최소 배터리 소모를 반환하는 문제.

### 문제 풀이 1 - dp (정답, 시간초과)

- 짝수의 경우는 자신의 절반 거리만큼의 배터리를 그대로 사용할 수 있고, 홀수의 경우는 dp(거리 - 1) + 1 만큼의 배터리 소모를 한다.

```js
function solution(n) {
  const dp = [];

  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;

  for (let i = 4; i <= n; i++) {
    if (i % 2 === 0) {
      dp[i] = dp[i / 2];
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return dp[n];
}
```

### 문제 풀이 2 - 규칙(정답, 효율성 1개 불통과)

어떤 수 `n` 은 1 이 될 때까지 2로 나누면서 나오는 홀수의 개수만큼 배터리를 소모한다.

```js
function solution(n) {
  let count = 1;

  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = Math.floor((n - 1) / 2);
      count += 1;
    }
  }

  return count;
}
```

### 문제 풀이 3 - 비트 연산으로 나눗셈 처리 (정답, 효율성 모두 통과)

`Math.floor` 대신 비트 시프트 연산을 사용하여 처리한다.

```js
function solution(n) {
  const memo = [];
  let count = 1;

  while (n > 1) {
    if (n % 2 === 0) {
      n = n >> 1;
    } else {
      n = n >> 1;
      count += 1;
    }
  }

  return count;
}
```
