function solution(word) {
  const alphabets = ['A', 'E', 'I', 'O', 'U'];
  let result = -1;

  function make(string, count) {
    if (string === word) {
      result = count;
      return count;
    }
    if (string.length === 5) {
      return count;
    }

    for (const alphabet of alphabets) {
      count = make(string + alphabet, count + 1);
    }
    return count;
  }

  make('', 0);

  return result;
}
