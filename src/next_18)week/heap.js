class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const root = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.downSort();

    return root;
  }

  push(value) {
    this.heap.push(value);
    this.upSort();
  }

  upSort() {
    let lastChild = this.size() - 1;
    let parent = Math.floor((lastChild - 1) / 2);

    while (parent >= 0 && this.heap[lastChild] < this.heap[parent]) {
      this.swap(lastChild, parent);
      lastChild = parent;
      parent = Math.floor((lastChild - 1) / 2);
    }
  }

  // 더 작은 쪽이랑 바꿔야 함
  downSort() {
    let parent = 0;
    let left = parent * 2 + 1;
    let right = parent * 2 + 2;

    while (
      (left < this.size() && this.heap[parent] > this.heap[left]) ||
      (right < this.size() && this.heap[parent] > this.heap[right])
    ) {
      if (
        this.heap[right] === undefined ||
        this.heap[left] < this.heap[right]
      ) {
        this.swap(left, parent);
        parent = left;
      } else {
        this.swap(right, parent);
        parent = right;
      }
      left = parent * 2 + 1;
      right = parent * 2 + 2;
    }
  }
}

function solution(scoville, K) {
  const heap = new Heap();
  let count = 0;

  scoville.forEach((el) => heap.push(el));

  while (heap.heap[0] < K && heap.size() > 1) {
    count++;
    heap.push(heap.pop() + heap.pop() * 2);
  }
  return heap.heap[0] >= K ? count : -1;
}
