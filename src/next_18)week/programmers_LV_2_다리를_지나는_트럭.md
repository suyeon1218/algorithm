# [다리를 지나는 트럭](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

- 다리의 길이 `bridgeLength`
- 다리가 버틸 수 있는 트럭의 무게 `maxWeight`
- 대기하고 있는 트럭 `trucks`

가 주어질 때 `trucks` 의 트럭이 모두 다리를 지나는데 걸리는 시간을 구하는 문제.

```
bridgeLength = 2
maxWeight = 10
trucks = [7, 4, 5, 6]
```

### 문제 풀이 - 스택/큐

- 다리를 의미하는 queue 를 생성한다.

  ```js
  const bridge = new Array(bridgeLength).fill(0);
  let truckIndex = 0;
  let weight = 0;
  let second = 0;
  ```

- 트럭을 차례대로 차에 실기 위해 반복문을 이용한다. 이때 `trucks` 를 `shift` 메서드로 빼줄 수도 있지만 효율성을 위해 `truckIndex` 로 각 트럭을 지정한다.

  ```js
  while (truckIndex < trucks.length) {
    const truck = trucks[truckIndex];
  }
  ```

- 매초마다 이뤄지는 일은 다음과 같다.

  ```js
  while (truckIndex < trucks.length) {
    const truck = trucks[truckIndex];

    // 1. 다리에서 트럭을 뺀다

    // 2. 다리에 트럭을 넣을 수 있으면 트럭을 넣는다
    // 2-1. 무게가 못버티는 경우 트럭을 넣지 않는다

    // 3. 시간을 증가시킨다
  }
  ```

  ```js
  if (bridge.length > 0) {
    // 1. 다리에서 트럭을 뺀다
    weight -= brdige.shift();
  }

  // 2. 트럭을 넣을 수 있는 경우
  if (bridge.length < birdgeLength && weight + truck <= maxWeight) {
    bridge.push(truck);
    truckIndex += 1;
    weight += truck;
  }

  // 3. 트럭을 넣을 수 없는 경우
  if (bridge.length < bridgeLength && weight + truck > maxWeight) {
    bridge.push(0); // 다리의 길이를 지키기 위해 무게 0 추가
  }

  second += 1; // 시간 증가
  ```

- 반복문이 끝나게 되면 모든 트럭이 다리 위에 올라간 상태임을 의미한다.
  다리 위에 모든 트럭이 올라가는 시간 + 다리에서 남은 트럭이 빠져나오는 시간 을 반환해주면 된다.
  ```js
  return second + bridge.length;
  ```
