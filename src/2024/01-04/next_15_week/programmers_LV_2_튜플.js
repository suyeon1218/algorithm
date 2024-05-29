function solution(s) {
  const setArr = [];
  const result = [];

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '{') {
      let set = '';
      i += 1;

      while (s[i] !== '}') {
        set += s[i];
        i++;
      }

      setArr.push(new Set(set.split(',').map(Number)));
    }
  }

  setArr.sort((a, b) => (a.size < b.size ? -1 : 1));

  for (const set of setArr) {
    const arr = [...set];
    const firstNum = arr[0];

    result.push(firstNum);

    for (const nextSet of setArr) {
      nextSet.delete(firstNum);
    }
  }

  return result;
}

solution('{{2},{2,1,3},{2,1},{2,1,3,4}}');
