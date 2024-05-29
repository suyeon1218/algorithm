function solution(cards) {
  const isVisit = new Array(cards.length).fill(false);
  const boxes = [];
  let visitCount = 0;

  while (visitCount < cards.length) {
    const box = [];
    let currBox = 0;

    while (isVisit[currBox] === true) {
      currBox += 1;
    }

    while (isVisit[currBox] === false) {
      isVisit[currBox] = true;
      visitCount += 1;

      box.push(cards[currBox]);
      currBox = cards[currBox] - 1;
    }

    boxes.push(box.length);
  }

  boxes.sort((a, b) => b - a);

  return boxes.length === 1 ? 0 : boxes[0] * boxes[1];
}
