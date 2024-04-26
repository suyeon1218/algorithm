# [프로세스](https://school.programmers.co.kr/learn/courses/30/lessons/42587)

### 문제 규칙

```
1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
  3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
```

예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행한다.

우선순위와 프로세스의 인덱스가 주어질 때, 해당 프로세스가 몇번째로 실행될지 구하는 문제.

### 반복

- 가장 큰 우선순위를 구한다.
  ```js
  const maxPriority = Math.max(...priorities);
  ```
- 프로세스를 반복해서 돌면서 현재 프로세스가 가장 큰 우선순위를 가지고 있다면 해당 프로세스를 종료한다.
- 프로세스를 종료하며 현재까지 종료한 프로세스의 수를 센다.
  ```js
  while (priorities.length > 0) {
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] === maxPriority) {
        priorities[i] = 0;
        count += 1;
      }
    }
  }
  ```
- 또 다시 가장 큰 우선순위를 구한다.
  ```js
  while (priorities.length > 0) {
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] === maxPriority) {
        priorities[i] = 0;
        count += 1;
        maxPriority = Math.max(...priorities);
      }
    }
  }
  ```
- 위 구문을 반복하면서 현재 종료하는 프로세스 번호가 `location`, 즉 알고자 하는 프로세스의 인덱스라면 반복문을 종료한다.
  ```js
  while (priorities.length > 0) {
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] === maxPriority) {
        priorities[i] = 0;
        count += 1;
        if (location === i) {
          return count;
        }
        maxPriority = Math.max(...priorities);
      }
    }
  }
  ```
