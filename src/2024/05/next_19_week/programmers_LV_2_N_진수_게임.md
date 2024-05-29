# [N진수게임](https://school.programmers.co.kr/learn/courses/30/lessons/17687?language=javascript)

### 문제 설명

- 숫자를 0부터 시작해서 차례대로 말한다. 첫 번째 사람은 0, 두 번째 사람은 1, … 열 번째 사람은 9를 말한다.

- 10 이상의 숫자부터는 한 자리씩 끊어서 말한다. 즉 열한 번째 사람은 10의 첫 자리인 1, 열두 번째 사람은 둘째 자리인 0을 말한다.

- 이렇게 게임을 진행할 경우,
  `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4, …`
  순으로 숫자를 말하면 된다.

- 한편 코딩 동아리 일원들은 컴퓨터를 다루는 사람답게 이진수로 이 게임을 진행하기도 하는데, 이 경우에는
  `0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, …`
  순으로 숫자를 말하면 된다.

### 매개변수

- `n` : 진수
- `t` : 튜브가 말할 수의 개수
- `m` : 게임 인원
- `p` : 튜브 순서

### 반환 값

튜브가 말할 숫자를 문자열로 이어붙여서 반환한다.

### 문제 풀이

```js
const answer = []; // 반환할 값
let number = 0; // 현재 숫자
let position = 0; // 현재 순서
```

- 게임 진행을 위해 반복문을 사용한다.
- `toString` 메서드로 숫자를 진수로 변환한다.

  ```js
  while (true) {
    const changedNumber = number.toString(n);
  }
  ```

- 변환한 숫자를 +1 씩 카운트 하면서 진수를 센다.

  ```js
  while (true) {
    const changedNumber = number.toString(n);

    for (let i = 0; i < changedNumber.length; i++) {
      // ...
    }

    number += 1;
  }
  ```

- 현재 차례가 튜브의 차례면 `answer` 에 말하는 숫자를 추가한다.
- `answer` 의 길이가 `t` 가 되면 현재까지의 값을 반환한다.

```js
for (let i = 0; i < changedNumber.length; i++) {
  if (position % m === p - 1) {
    answer.push(changedNumber[i]);
  }
  if (answer.length === t) {
    return answer.map((e) => e.toUpperCase()).join('');
  }
}
```

> 대문자로 반환해야하는 것을 주의해야한다!
