function solution(msg) {
  const result = [];
  const dict = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  let index = 27;

  for (let i = 0; i < msg.length; i++) {
    let w = msg[i];
    let c = msg[i + 1];

    while (i < msg.length - 1 && dict[w + c] !== undefined) {
      i += 1;
      w += c;
      c = msg[i + 1];
    }
    dict[w + c] = index;
    index += 1;

    result.push(dict[w]);
  }

  return result;
}
