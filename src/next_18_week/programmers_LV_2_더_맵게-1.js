// 최소 힙? - 3, 12, 13, 15 실패, 시간초과

function solution(scoville, K) {
  let change = 0;
  scoville.sort((a, b) => a - b);

  while (scoville[0] < K && scoville.length > 1) {
    const food1 = scoville.shift(); // !뽑을 때 마다 정렬해줘야 함
    const food2 = scoville.shift();
    const nextFood = food1 + food2 * 2;

    scoville.push(nextFood);

    let curr = scoville.length - 1;
    let parent = Math.floor((curr - 1) / 2);

    while (scoville[curr] < scoville[parent] && parent >= 0) {
      [scoville[curr], scoville[parent]] = [scoville[parent], scoville[curr]];
      curr = parent;
      parent = Math.floor((curr - 1) / 2);
    }

    console.log(scoville);
    change += 1;
  }

  return scoville[0] < K ? -1 : change;
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
