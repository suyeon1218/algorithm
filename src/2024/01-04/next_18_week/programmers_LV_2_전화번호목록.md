# [전화번호 목록](https://school.programmers.co.kr/learn/courses/30/lessons/42577)

- 전화번호 목록이 주어질때 어떤 번호가 다른 전화번호의 접두사인 경우가 있으면 `false` 아니면 `true` 를 반환하는 문제

### 문제 풀이 - 1. 완전 탐색

2중 반복문을 사용해서 2개의 번호중 더 짧은 번호가 다른 번호의 접두어로 들어가는지 판별한다.

- 이중 반복문을 사용하므로 O(N^2) 의 시간이 걸린다.

```js
function solution(phoneBook) {
  for (let i = 0; i < phoneBook.length - 1; i++) {
    for (let j = i + 1; j < phoneBook.length; j++) {
      if (phoneBook[j].length < phoneBook[i].length) {
        if (phoneBook[i].slice(0, phoneBook[j].length) === phoneBook[j]) {
          return false;
        }
      } else {
        if (phoneBook[j].slice(0, phoneBook[i].length) === phoneBook[i]) {
          return false;
        }
      }
    }
  }

  return true;
}
```

> 효율성 검사에서 실패한다.

### 문제풀이 - 2. 해시

해시에 각 전화번호를 저장해놓고, 각 번호의 인덱스를 잘러 해시에 있는지 검사한다.

- 전화 번호 목록(n)과, 각 전화번호의 인덱스(m)를 차례대로 탐사하므로 시간 복잡도 는 O(N \* M) 이다.

```js
function solution(phoneBook) {
  const set = new Set(phoneBook);

  for (let i = 0; i < phoneBook.length; i++) {
    for (let j = 0; j < phoneBook[i].length; j++) {
      const subNum = phoneBook[i].slice(0, j);

      if (set.has(subNum)) {
        return false;
      }
    }
  }

  return true;
}
```

### 문제풀이 - 3. 정렬

자바스크립트의 정렬은 문자열을 기준으로 하기 때문에 앞 문자가 비슷한 순서대로, 그리고 더 짧은 순서대로 정렬한다.

- 정렬은 O(N logN) 만큼의 시간이 소모되고, some 메서드를 사용해 O(N) 시간 만큼 탐색이 소모되므로 전체 시간은 O(N logN) 이다.

```js
function solution(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
}
```
