# [의상](https://school.programmers.co.kr/learn/courses/30/lessons/42578)

- 종류에 따라 매일 다른 옷을 입어야 할 때 각자 다르게 입는 조합의 수를 구하는 문제

### 문제 풀이

1. `clothes` 로 들어온 옷들을 종류에 따라 분류한다.

```js
const closet = {};

clothes.forEach((cloth) => {
  const [name, type] = cloth;

  if (closet[cloth] === undefined) {
    closet[cloth] = 0;
  }

  closet[cloth] += 1;
});
```

2. 조합의 개수를 세기 위해서 공식을 사용한다.

- 이때 모든 의상이 선택되지 않는 경우의 수를 빼기 위해 -1 을 해준다.

```js
const closetCountArr = Object.values(closet);

return (
  closetCountArr.reduce((prev, curr) => {
    return (prev += curr + 1);
  }, 1) - 1
);
```
