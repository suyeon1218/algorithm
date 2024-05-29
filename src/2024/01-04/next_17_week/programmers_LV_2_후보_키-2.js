function solution(relation) {
  const cols = relation[0].length; // 4

  // 0001 비트를 4(n) 만큼 이동시킨다
  const check = 1 << cols; // 2 ^ 4
  const answer = new Set();

  for (let i = 1; i < check; i++) {
    console.log(i);
    // 각 행을 순회하면서 col index 비트가 일치하는 것만을 가져옴
    // 예를 들어 0011 이면 행마다 1열, 2열의 값들을 뽑아서 join 메서드 취함
    // i & (i << index) => 현재 조합(i)에서 index번째 비트가 1인지를 확인
    let temp = relation.map((x) =>
      x
        .filter((col, index) => {
          return i & (1 << index);
        })
        .join(''),
    );
    const set = new Set(temp);

    // 우선 모든 후보키를 저장함 (비트의 형식으로)
    if (temp.length === set.size) answer.add(i);
  }

  // 여기서 최소성 처리
  for (let x of answer) {
    for (let y of answer) {
      // 작은 수부터 비교하게 되므로 x >= y 는 필요없는 y 가 모두 사라지고 난 뒤의 일
      if (x >= y) continue;
      // y 가 x 를 포함하는지 판별 -> x 가 있으니 y 는 제거
      if ((x & y) === x) answer.delete(y);
    }
  }

  return answer.size;
}

solution([
  ['100', 'ryan', 'music', '2'],
  ['200', 'apeach', 'math', '2'],
  ['300', 'tube', 'computer', '3'],
  ['400', 'con', 'computer', '4'],
  ['500', 'muzi', 'music', '3'],
  ['600', 'apeach', 'music', '2'],
]);
