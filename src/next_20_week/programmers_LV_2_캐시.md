# [캐시](https://school.programmers.co.kr/learn/courses/30/lessons/17680)

- 캐시 hit 이면 1초, 캐시 miss 면 5초가 걸린다고 한다.
- 캐시는 LRU (Least Recently Used) 알고리즘으로 설계돼 있다.
- 캐시 사이즈와 검색할 목록이 주어질 때 총 검색 실행시간을 반환하는 문재.

### 겪은 에러 1. 대문자 소문자

```js
city = city.toUpperCase();
```

- 문제를 제대로 읽자

### 겪은 에러 2. LRU 캐시 특성

- 제일 헤맸던 건... 새로 들어온 키 값으로 인해서 앞의 키 값을 계속 업데이트 시켜줘야 하는 부분
- Set 자료가 iterable 하고, 배열로 만들 수 있다는 점을 생각해서 해결

```js
const cache = new Set();

for (let city of cities) {
  city = city.toUpperCase();

  if (cache.has(city)) {
    time += 1;
    cache.delete(city);
  } else {
    time += 5;
    if (cache.size === maxSize) {
      cache.delete([...city][0]);
    }
  }

  cache.add(city);
}
```

### 겪은 에러 3. cache size

- 캐시 사이즈가 0 인 경우를 잘 처리해줘야 함
