function solution(s) {
  const newArr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));

  newArr.sort((a, b) => a.length - b.length);

  const temp = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      temp.push(newArr[i][j]);
    }
  }

  // ! 차례대로 앞에서 부터 쌓이는 점을 이용...
  return [...new Set(temp)];
}
