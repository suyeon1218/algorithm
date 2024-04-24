function solution(bridgeLength, maxWeight, trucks) {
  const bridge = new Array(bridgeLength).fill(0);
  let truckIndex = 0; // 큐로 할 수 있겠는데 index 로 빼내는 게 효율성 측면에서 좋을 듯
  let weight = 0;
  let second = 0;

  while (truckIndex < trucks.length) {
    const truck = trucks[truckIndex];

    if (bridge.length > 0) {
      // 브릿지에서 차 빼냄
      weight -= bridge.shift();
    }
    if (bridge.length < bridgeLength && weight + truck <= maxWeight) {
      // 다리 길이가 충분하고 && 트럭을 실을 수 있는 경우
      bridge.push(truck);
      weight += truck;
      truckIndex += 1;
    } else if (bridge.length < bridgeLength && weight + truck > maxWeight) {
      // 다리 길이가 충분하지만 && 트럭을 실을 수 없는 경우
      bridge.push(0);
    }

    // 다리 길이에 트럭을 올릴 수 없으면 그냥 시간만 추가
    second += 1;
  }

  // 다리에 트럭이 모두 올라간 시간 + 다리에서 차들이 모두 빠져나오는 시간
  return second + bridge.length;
}

solution(2, 10, [7, 4, 5, 6]);
