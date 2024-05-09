function getPlayTime(startTime, endTime) {
  const [startHour, startMin] = startTime.split(':').map(Number);
  const [endHour, endMin] = endTime.split(':').map(Number);

  return (endHour - startHour) * 60 + (endMin - startMin);
}

// ! # 처리 올바르게 하기
function seperateSheet(sheet) {
  const newSheet = [];

  for (const name of sheet) {
    if (name === '#') {
      newSheet[newSheet.length - 1] += '#';
    } else {
      newSheet.push(name);
    }
  }

  return newSheet;
}

function solution(m, musicinfos) {
  const answer = [];
  m = seperateSheet(m);

  for (const music of musicinfos) {
    const [startTime, endTime, title, sheet] = music.split(',');
    const playTime = getPlayTime(startTime, endTime);
    const newSheet = seperateSheet(sheet);
    const playMusic = [];
    let count = 0;

    for (let time = 0; time < playTime; time++) {
      playMusic.push(newSheet[time % newSheet.length]);
    }

    for (let i = 0; i < playMusic.length; i++) {
      if (count === m.length) {
        break;
      }
      if (count > 0 && playMusic[i] !== m[count]) {
        count = 0;
      }
      if (m[count] === playMusic[i]) {
        count += 1;
      }
    }

    if (count === m.length) {
      answer.push([title, playTime]);
    }
  }

  // ! 정렬 기준 똑바로 해주기
  answer.sort((a, b) => (a[1] <= b[1] ? 1 : -1));

  return answer.length === 0 ? '(None)' : answer[0][0];
}
