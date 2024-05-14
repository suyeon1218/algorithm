function solution(N, roads, K) {
  const graph = [...new Array(N)].map(() => new Array(N).fill(Infinity));
  const visited = new Array(N).fill(false);
  let answer = 0;

  for (let i = 0; i < N; i++) {
    graph[i][i] = 0;
  }

  visited[0] = true;

  for (const road of roads) {
    const [start, end, distance] = road;

    graph[start - 1][end - 1] = Math.min(distance, graph[start - 1][end - 1]);
    graph[end - 1][start - 1] = Math.min(distance, graph[end - 1][start - 1]);
  }

  for (let i = 1; i < N; i++) {
    let minNode = Infinity;
    let minIndex;

    for (let node = 1; node < N; node++) {
      if (visited[node]) continue;

      if (minNode > graph[0][node]) {
        minNode = graph[0][node];
        minIndex = node;
      }
    }

    visited[minIndex] = true;
    for (let end = 0; end < N; end++) {
      if (minIndex === end) continue;
      if (graph[minIndex][end] + graph[0][minIndex] < graph[0][end]) {
        graph[0][end] = graph[minIndex][end] + graph[0][minIndex];
      }
    }
  }

  for (let i = 0; i < N; i++) {
    if (graph[0][i] <= K) {
      answer += 1;
    }
  }

  return answer;
}
