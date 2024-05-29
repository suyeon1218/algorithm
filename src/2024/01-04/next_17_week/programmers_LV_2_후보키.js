// ! 반례 실패

function countUniqueKey(keys) {
  const set = new Set();

  for (const keyArr of keys) {
    set.add(JSON.stringify(keyArr));
  }

  return set.size;
}

function solution(relation) {
  const totalPeople = relation.length;
  let candidateKey = 0;

  const recursive = (keys, searchStart) => {
    const currTotalKeys = [];

    if (searchStart >= relation[0].length) {
      return;
    }

    for (
      let keyIndex = searchStart;
      keyIndex < relation[0].length;
      keyIndex++
    ) {
      const nextKeys = keys.map((key) => [...key]);
      for (let people = 0; people < totalPeople; people++) {
        if (nextKeys[people] === undefined) {
          nextKeys[people] = [];
        }
        nextKeys[people].push(relation[people][keyIndex]);
      }
      currTotalKeys.push(nextKeys);
    }

    const uniqueKey = currTotalKeys.reduce((prev, curr) => {
      if (countUniqueKey(curr) === totalPeople) {
        return prev + 1;
      }
      return prev;
    }, 0);

    if (uniqueKey > 0) {
      candidateKey += uniqueKey;
    }

    recursive();
  };

  recursive([], 0);

  return candidateKey;
}
