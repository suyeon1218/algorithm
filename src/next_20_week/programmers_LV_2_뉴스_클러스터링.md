# [뉴스 클러스터링](https://school.programmers.co.kr/learn/courses/30/lessons/17677/solution_groups?language=javascript)

### 문제 설명

- 자카드 유사도에 따라 뉴스가 가진 유사성을 검사하려고 한다.
- `str1` 과 `str2` 가 주어질때 각 다중집합은 글자 씩 끊어서 만든다.
- 영문자는 대소문자를 구분하지 않으며, 다중집합에서 공백이나 숫자, 특수문자가 포함된 것은 제외시킨다.
- 자카드 공식에 따라 (교집합 / 합집합) 을 구하고 여기다 65536 을 곱한 뒤 정수만을 출력하는 문제

### 문제 풀이 - 1

- 그냥 무식하게 풀었다... 다중 집합을 처리하기 위해서 object 를 만들어 겹치는 부분을 Math.min 으로 처리했다.

### 문제 풀이 - 2

1. arr1 과 arr2 을 합친 set 을 만든다.

```js
const arr1 = explode(str1);
const arr2 = explode(str2);
const set = new Set([...arr1, ...arr2]);
```

2. set 을 순회하며 min 과 max 로 `union` 과 `intersection` 을 구한다.

```js
set.forEach((item) => {
  const has1 = arr1.filter((x) => x === item).length;
  const has2 = arr2.filter((x) => x === item).length;
  union += Math.max(has1, has2);
  intersection += Math.min(has1, has2);
});
```

```js
function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
```
