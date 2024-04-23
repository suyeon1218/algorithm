//! 18, 19, 20, 25, 28 실패;;;;

function countUniqueKey(keys) {
  const set = new Set();

  for (const keyArr of keys) {
    set.add(JSON.stringify(keyArr));
  }

  return set.size;
}

function solution(relation) {
  const excludeKeys = [];
  let candidateKey = 0;

  const makeCombination = (keys) => {
    const comb = [];

    const make = (start, currComb) => {
      if (start > keys.length) return;
      comb.push(currComb.join(','));

      for (let i = start; i < keys.length; i++) {
        make(i + 1, [...currComb, keys[i]]);
      }
    };

    make(0, []);

    return comb;
  };

  const recursive = (startKey, currKeys, maxHasKey, memo) => {
    if (currKeys.length === maxHasKey) {
      memo.push(currKeys);
      return;
    }
    if (startKey >= relation[0].length) {
      return;
    }

    for (let key = startKey; key < relation[0].length; key++) {
      const nextKey = [...currKeys, key];
      const combination = makeCombination(nextKey);
      if (combination.every((comb) => !excludeKeys.includes(comb))) {
        recursive(key + 1, nextKey, maxHasKey, memo);
      }
    }
  };

  const makeStringKey = (candidateKeys) => {
    const stringKey = [];

    for (let person = 0; person < relation.length; person++) {
      if (stringKey[person] === undefined) {
        stringKey[person] = [];
      }

      for (const key of candidateKeys) {
        stringKey[person].push(relation[person][key]);
      }
    }

    return stringKey;
  };

  for (let key = 1; key <= relation[0].length; key++) {
    const combination = [];
    recursive(0, [], key, combination);

    for (const candidate of combination) {
      const stringKey = makeStringKey(candidate);

      if (countUniqueKey(stringKey) === relation.length) {
        candidateKey += 1;
        excludeKeys.push(candidate.join(','));
      }
    }
  }

  return candidateKey;
}

solution([
  ['a', '1', 'aaa', 'c', 'ng'],
  ['a', '1', 'bbb', 'e', 'g'],
  ['c', '1', 'aaa', 'd', 'ng'],
  ['d', '2', 'bbb', 'd', 'ng'],
]);
