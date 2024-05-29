function solution(str1, str2) {
  const pattern = /^[a-zA-Z]+$/;
  const intersection = [];
  const arr1 = [];
  const arr2 = [];

  // 1. 같은 문자는 구분 안 하므로 대문자 처리
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  // 1-1. 같은 문자는 예외처리
  if (str1 === str2) {
    return 65536;
  }

  // 2. 두문자 씩 끊어서 집합 생성하기
  for (let i = 0; i < str1.length - 1; i++) {
    arr1.push(str1[i] + str1[i + 1]);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    arr2.push(str2[i] + str2[i + 1]);
  }

  // 3. 영문자로만 이뤄진 값들로 추출하기
  const dict1 = {};
  const dict2 = {};

  arr1.forEach((char) => {
    if (pattern.test(char)) {
      if (dict1[char] === undefined) dict1[char] = 0;
      dict1[char] += 1;
    }
  });
  arr2.forEach((char) => {
    if (pattern.test(char)) {
      if (dict2[char] === undefined) dict2[char] = 0;
      dict2[char] += 1;
    }
  });

  const size1 = Object.values(dict1).reduce((prev, curr) => prev + curr, 0);
  const size2 = Object.values(dict2).reduce((prev, curr) => prev + curr, 0);

  // 3-1. 비교할 집단이 없는 경우 예외처리
  if (size1 === 0 && size2 === 0) {
    return 65536;
  }

  for (const char in dict1) {
    if (dict2[char] !== undefined) {
      intersection[char] = Math.min(dict1[char], dict2[char]);
    }
  }

  const size3 = Object.values(intersection).reduce(
    (prev, curr) => prev + curr,
    0,
  );
  return Math.floor((size3 / (size1 + size2 - size3)) * 65536);
}
