# [압축](https://school.programmers.co.kr/learn/courses/30/lessons/17684)

- 문제에서 설명하는 무손실 압축 알고리즘대로 압축을 진행하려 한다.
- `msg` 가 주어질 때, `msg` 를 압축한 뒤 색인 인덱스 배열을 반환하는 문제.

### 문제 풀이

1. 알파벳 대문자 사전을 준비한다

2. `msg` 를 순회한다.

```js
for (let i = 0; i < msg.length; i++) {
  let w = msg[i];
  let c = msg[i + 1];
}
```

3. 현재 압축하려는 문자 `w` 는 사전에 있는 가장 긴 문자열로 지정한다. 이를 위해 w + c 가 계속 사전 안에 있는지 검사한다.

```js
for (let i = 0; i < msg.length; i++) {
  let w = msg[i];
  let c = msg[i + 1];

  while (i < msg.length - 1 && msg[w + c] !== undefined) {
    i += 1;
    w += c;
    c = msg[i + 1];
  }
}
```

4. 사전에 없는 `w + c` 가 나오면 이를 현재의 `w` 를 압축하고, `w + c` 는 사전에 등록한다.

```js
dict[w + c] = index;
index += 1;

result.push(dict[w]);
```
