# [기능 개발](https://school.programmers.co.kr/learn/courses/30/lessons/42586)

### 문제 설명

- 기능 개발은 100퍼센트가 되어야 출시 될 수 있다.
- 뒤 기능이 앞 기능보다 먼저 완료될 수 있다. 이 때 완료된 뒤 기능은 앞 기능이 완료될 때 함께 배포할 수 있다.
- 배포되어야 하는 순서대로 작업의 진행 상황이 적힌 `progress` 와 작업 개발 속도 `speeds` 가 주어질 때 각 기능이 배포될 때 마다 몇개의 기능이 함께 배포되는지 반환

### 문제 풀이 - 1 (O(N^2))

- 각 기능을 반복한다.

  ```js
  const result = [];

  for (let i = 0; i < progress.length; i++) {
    // ...
  }
  ```

- 현재 기능이 완료되기까지의 작업 기간을 계산한다.
  ```js
  for (let i = 0; i < progress.length; i++) {
    const days = Math.ceil((100 - progress[i]) / speeds[i]);
  }
  ```
- 해당 기간만큼 작업한 경우 모든 기능의 진행율을 업데이트 한다.

  ```js
  for (let i = 0; i < progress.length; i++) {
    const days = Math.ceil((100 - progress[i]) / speeds[i]);

    for (let j = i; j < progress.length; j++) {
      progress[j] += speeds[j] * days;
    }
  }
  ```

- 업데이트 된 이후 현재 기능과 함께 출시할 수 있는 기능을 세고, `result` 에 추가한다. (다음 반복문은 완료된 작업 다음부터 시작한다.)

  ```js
  let count = 1;

  while (progress[i + 1] >= 100) {
    count += 1;
    i += 1;
  }

  result.push(count);
  ```

### 문제 풀이 - 2 (O(N))

- 현재 기능이 걸리는 시간을 계산한다.

  ```js
  let curr = 0;
  let next = 1;

  let currTime = Math.ceil((100 - processes[curr]) / speeds[curr]);
  ```

- 프로세스를 반복하면서 다음에 있는 기능이 완료되는 시간을 계산한다.
  ```js
  while (next < processes.length) {
    const nextTime = Math.ceil((100 - processes[next]) / speeds[next]);
  }
  ```
- 만약 다음 기능 시간이 현재 시간보다 더 짧게 걸리는 경우 다음 기능을 계산한다.
  ```js
  if (nextTime <= currTime) {
    next += 1;
  }
  ```
- 만약 다음 기능이 완료되지 못하는 경우 현재까지 진행한 기능을 `result` 에 추가한다.
  ```js
  else {
    result.push(next - curr);
    currTime = nextTime;
    curr = next;
    next = curr + 1;
  }
  ```
