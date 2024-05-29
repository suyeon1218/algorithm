function solution(s) {
  const stringLen = s.length;
  let minCompressedLength = stringLen;

  for (let compressed = 1; compressed <= stringLen; compressed++) {
    let count = 1;
    let index = 0;
    let compressedString = '';
    let prevChar = s.substring(index, index + compressed);

    do {
      index += compressed;
      const currChar = s.substring(index, index + compressed);

      if (currChar === prevChar) {
        count += 1;
      } else {
        compressedString += count > 1 ? `${count}${prevChar}` : `${prevChar}`;
        prevChar = currChar;
        count = 1;
      }
    } while (index < stringLen);

    minCompressedLength = Math.min(
      minCompressedLength,
      compressedString.length,
    );
  }

  return minCompressedLength;
}

solution('aabbaccc');
