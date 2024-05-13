function solution(n, words) {
  const orderDict = {};
  const prevWords = new Set();
  let order = 1;

  for (let i = 1; i <= n; i++) {
    orderDict[i] = 0;
  }

  for (let word = 0; word < words.length; word++) {
    const prevWord = words[word - 1];

    if (order > n) {
      order = 1;
    }
    if (prevWords.has(words[word])) {
      return [order, orderDict[order] + 1];
    }
    if (prevWord && words[word][0] !== prevWord[prevWord.length - 1]) {
      return [order, orderDict[order] + 1];
    }

    orderDict[order] += 1;
    order += 1;
    prevWords.add(words[word]);
  }

  return [0, 0];
}
