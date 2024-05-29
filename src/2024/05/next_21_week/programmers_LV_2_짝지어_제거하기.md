# [짝지어 제거하기](https://school.programmers.co.kr/learn/courses/30/lessons/12973)

### 문제 설명

- 같은 문자 두개가 모이면 제거할 때, 문자열 `s` 를 모두 제거할 수 있으면 1, 없으면 0을 반환하는 문제

### 문제 풀이

- `s` 를 처음부터 순회하면서 `stack` 의 마지막 요소와 비교하여 빼면 되는 문제

```js
const stack = [];

for (const char of s) {
  const prev = stack.pop();

  if (!prev) {
    stack.push(char);
  } else if (prev !== char) {
    stack.push(char);
  }
}
```
