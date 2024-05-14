# [N개의 최소 공배수](https://school.programmers.co.kr/learn/courses/30/lessons/12953)

### 문제 설명

- `arr` 에 들어있는 모든 수의 최소 공배수를 구하는 문제

### 문제 풀이

- (a \* b) / (a 와 b 의 최대공약수) 공식으로 해결

```js
// 최대 공약수 구하는 코드
while (a % b !== 0) {
  const divider = a % b;
  a = b;
  b = divider;
}
```
