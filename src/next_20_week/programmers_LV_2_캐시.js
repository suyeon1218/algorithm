function solution(cacheSize, cities) {
  const cache = new Set();
  let time = 0;

  for (let city of cities) {
    city = city.toUpperCase();

    if (cache.has(city)) {
      time += 1;
      cache.delete(city);
    } else {
      time += 5;
      if (cache.size === cacheSize) {
        cache.delete([...cache][0]);
      }
    }

    if (cache.size < cacheSize) {
      cache.add(city);
    }
  }
  return time;
}

solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']);
