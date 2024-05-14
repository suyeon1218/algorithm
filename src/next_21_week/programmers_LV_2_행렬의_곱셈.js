function solution(arr1, arr2) {
  const answer = [...new Array(arr1.length)].map(() =>
    new Array(arr2[0].length).fill(0),
  );

  for (let col = 0; col < arr2[0].length; col++) {
    const currColNums = arr2.map((row) => row[col]);

    for (let row = 0; row < arr1.length; row++) {
      const currRowNums = arr1[row];
      let sum = 0;

      for (let i = 0; i < currColNums.length; i++) {
        sum += currColNums[i] * currRowNums[i];
      }

      answer[row][col] = sum;
    }
  }

  return answer;
}
