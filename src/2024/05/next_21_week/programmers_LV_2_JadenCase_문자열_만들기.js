function solution(s) {
  return (s = s
    .split(' ')
    .map((el) => {
      if (el === '') return '';
      el = el.toLowerCase();
      el = el.split('');
      el[0] = el[0].toUpperCase();

      return el.join('');
    })
    .join(' '));
}
