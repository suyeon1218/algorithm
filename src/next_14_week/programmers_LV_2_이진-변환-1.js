function solution(s) {
  let round = 0;
  let count = 0;

  while (s !== '1') {
    round += 1;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '0') {
        count += 1;
      }
    }
    s = s.split('0');
    s = s.join('');
    s = s.length.toString(2);
  }

  return [round, count];
}
