# [방금 그 곡](https://school.programmers.co.kr/learn/courses/30/lessons/17683)

- 방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
- 네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
- 각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다. 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
- 음악이 00:00를 넘겨서까지 재생되는 일은 없다.
- 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
- 조건이 일치하는 음악이 없을 때에는 “(None)”을 반환한다.

### 문제 풀이

1. # 이 붙어 있는 음표와 아닌 음표를 구분해야하기 때문에 # 처리를 한 배열로 악보를 만든다.

```js
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
```

2. 각 음악을 반복하며 재생시간만큼의 악보를 생성한다.

```js
for (const music of musicinfos) {
  const [startTime, endTime, title, sheet] = music.split(',');
  const playTime = getPlayTime(startTime, endTime); // 재생 시간 계산하기
  const newSheet = seperateSheet(sheet); // # 으로 악보 구분하기
  const playMusic = []; // 재생시간만큼 재생된 악보
  let count = 0;

  for (let time = 0; time < playTime; time++) {
    playMusic.push(newSheet[time % newSheet.length]);
  }
}
```

3. 악보와 네오가 들은 음을 비교하여 `count` 로 개수를 세고, 그 개수와 일치하면 answer 에 넣는다.

```js
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
```

4. 정렬을 해준 다음 반환한다.

```js
answer.sort((a, b) => (a[1] <= b[1] ? 1 : -1));

return answer.length === 0 ? '(None)' : answer[0][0];
```
