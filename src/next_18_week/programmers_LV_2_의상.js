function solution(clothes) {
  const closet = {};

  for (let [cloth, type] of clothes) {
    if (closet[type] === undefined) {
      closet[type] = 0;
    }
    closet[type] += 1;
  }

  const closetArray = Object.values(closet);

  let result = closetArray.reduce((prev, next) => {
    return (prev *= next + 1);
  }, 1);

  return result - 1;
}
