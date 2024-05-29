// ! 더 낮은 점수를 많이 맞춘 경우 sort 를 바르게 하지 못해서 30점 날라감...
// ! 고치고 나니까 8번 18번 케이스 틀림
// * 낮은 걸 많이 < 가장 낮은 점수를 가져간 케이스
// * 뒤에서 부터 정렬해야함...
// * 개인적으로 쓰레기 문제라고 생각합니다

function solution(n, info) {
  const initScore = new Array(11).fill(0);
  const memo = {};
  let apeachScore = 0;
  let maxDiff = 0;

  // 어피치 점수 계산
  for (let i = 0; i < 11; i++) {
    if (info[i] > 0) {
      apeachScore += 10 - i;
    }
  }

  const go = (round, arrow, scores, apeach, lion) => {
    const currRoundScore = 10 - round;
    const nextScores = [...scores];
    const apeachArrow = info[round];

    if (round === 10 && arrow > 0) {
      scores[round] += arrow;
      arrow = 0;
    }

    if (arrow === 0) {
      if (maxDiff <= lion - apeach) {
        maxDiff = lion - apeach;
        if (memo[maxDiff] === undefined) {
          memo[maxDiff] = [];
        }
        memo[maxDiff].push(scores);
      }
      return;
    }

    if (apeachArrow + 1 <= arrow) {
      nextScores[round] += apeachArrow + 1;
      // * 해당 라운드에 더 많은 화살을 쏘는 경우
      if (apeachArrow === 0) {
        go(
          round + 1,
          arrow - (apeachArrow + 1),
          nextScores,
          apeach,
          lion + currRoundScore,
        );
      } else {
        go(
          round + 1,
          arrow - (apeachArrow + 1),
          nextScores,
          apeach - currRoundScore,
          lion + currRoundScore,
        );
      }
    }

    go(round + 1, arrow, [...scores], apeach, lion);
  };

  go(0, n, initScore, apeachScore, 0);

  if (maxDiff === 0) return [-1];

  memo[maxDiff].sort((a, b) => {
    for (let i = 10; i >= 0; i--) {
      if (a[i] !== b[i]) {
        return b[i] - a[i];
      }
    }
  });

  return memo[maxDiff][0];
}

solution(3, [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1]);
