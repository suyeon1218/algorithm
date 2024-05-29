// ! 두번째 -> 2, 15, 16, 17, 18, 19 20 실패
// * 같은 행에 있는 경우를 생각 못했었음 ->> 해결!

function solution(n, left, right) {
  const answer = [];
  let [startRow, startCol] = [Math.floor(left / n), left % n];
  let [endRow, endCol] = [Math.floor(right / n), right % n];

  for (let row = startRow; row <= endRow; row++) {
    const nums = [...new Array(n)].map((_, index) => {
      if (index <= row) {
        return row + 1;
      }
      return index + 1;
    });
    if (row === startRow) {
      for (
        let col = startCol;
        startRow !== endRow ? col < n : col <= endCol;
        col++
      ) {
        answer.push(nums[col]);
      }
    } else if (row < endRow) {
      for (let col = 0; col < n; col++) {
        answer.push(nums[col]);
      }
    } else {
      for (let col = 0; col <= endCol; col++) {
        answer.push(nums[col]);
      }
    }
  }
  return answer;
}

solution(3, 3, 4);
