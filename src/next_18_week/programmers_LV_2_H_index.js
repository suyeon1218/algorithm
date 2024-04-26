function solution(citations) {
  let maxH = 0;
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    const hIndex = citations.length - i;
    if (citations[i] === 0) {
      continue;
    }
    if (hIndex <= citations[i]) {
      maxH = hIndex;
      break;
    }
  }
  return maxH;
}
