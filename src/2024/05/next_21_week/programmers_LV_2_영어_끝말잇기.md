# [영어 끝말잇기](https://school.programmers.co.kr/learn/courses/30/lessons/12981)

- `n` 명의 참가자들끼리 영어 끝말잇기를 진행한다.
- 순서대로 끝말잇기를 하다가 맨 마지막 사람이 끝나면 첫번째 사람부터 다시 시작한다.
- 영어 끝말잇기는 이전에 말했던 단어를 얘기해선 안되며, 새로운 단어는 이전 단어의 끝 알파벳으로 시작해야 한다.
- 이때 처음으로 틀리는 사람의 순번과, 여태 말한 단어의 개수를 출력하는 문제
- 아무도 틀리는 사람이 없다면 [0, 0] 을 반환한다.

### 문제 풀이

1. 각 사람이 말한 단어를 세기 위해서 `orderDict` 를 만들고 초기화시킨다.

```js
const orderDict = {};

for (let i = 1; i <= n; i++) {
  orderDict[i] = 0;
}
```

2. 이전에 말한 단어를 판별하기 위해 `prevWords` 집합을 만들고 매 단어를 검사한다.

```js
let prevWords = new Set();

for (let word = 0; word < words.length; word++) {
  if (prevWords.has(words[word])) {
    return [order, orderDict[order] + 1];
  }
}
```

3. 이전 단어와 현재 단어가 이어지는지 검사한다.

```js
for (let word = 0; word < words.length; word++) {
  // 2번 코드
  const prevWord = words[word - 1];

  if (prevWord && words[word][0] !== prevWord[prevWord.length - 1]) {
    return [order, orderDict[order] + 1];
  }
}
```

4. 매 반복마다 다음 명령을 수행한다.

- 현재 단어를 저장한다
- 현재 플레이어가 말한 단어의 개수를 증가시킨다
- 다음 플레이어로 바꾼다.

```js
for (let word = 0; word < words.length; word++) {
  if (order > n) {
    order = 1;
  }
  // 2, 3번 코드
  orderDict[order] += 1;
  order += 1;
  prevWords.add(words[word]);
}
```

5. 게임을 틀린 사람이 없다면 `[0, 0]` 을 반환한다

```js
return [0, 0];
```
