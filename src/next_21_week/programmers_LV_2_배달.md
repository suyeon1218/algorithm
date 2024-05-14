# [배달](https://school.programmers.co.kr/learn/courses/30/lessons/12978)

### 문제 설명

- 마을 1에서 K 거리 내로 배달할 수 있는 마을의 수를 구하는 문제

### 문제 해설

- 다익스트라 문제
- 그런데... 1번 부터 N번까지 차례대로 탐색을 하는 게 아니라 제일 거리가 제일 짧은 노드부터 찾아서 `visited` 로 검사해주면서 찾아야 올바르게 찾을 수 있음

```js
// 틀린 코드
for (let start = 0; start < n; start++) {
  for (let end = 0; end < n; end++) {
    if (start === end) continue;
    if (graph[start][end] + graph[0][start] < graph[0][end]) {
      graph[0][end] = graph[start][end] + graph[0][start];
    }
  }
}
```

```js
// 올바른 코드
const visited = new Array(n).fill(false);
visited[0] = true;

for (let i = 0; i < N; i++) {
  let minDist = Infinity;
  let minIndex;

  for (let node = 1; node < N; node++) {
    if (nodes[node] < minDist) {
      minDist = nodes[node];
      minIndex = node;
    }
  }

  for (let end = 1; end < n; end++) {
    if (end === minIndex) continue;
    if (graph[0][minIndex] + graph[minIndex][end] < graph[0][end]) {
      graph[0][end] = graph[0][minIndex] + graph[minIndex][end];
    }
  }
}
```
