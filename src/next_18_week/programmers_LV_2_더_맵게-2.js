class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  pop() {
    const heapSize = this.size();

    if (heapSize === 0) return null;
    if (heapSize === 1) return this.heap.pop();

    const value = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.downSort();

    return value;
  }

  push(value) {
    this.heap.push(value);
    this.upSort();

    return this.heap;
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

  downSort() {
    let parent = 0;
    let leftChild = parent * 2 + 1;
    let rightChild = parent * 2 + 2;

    while (
      (leftChild <= this.size() - 1 &&
        this.heap[leftChild] < this.heap[parent]) ||
      (rightChild <= this.size() - 1 &&
        this.heap[rightChild] < this.heap[parent])
    ) {
      if (
        rightChild <= this.size() - 1 &&
        this.heap[leftChild] > this.heap[rightChild]
      ) {
        this.swap(parent, rightChild);
        parent = rightChild;
      } else {
        this.swap(parent, leftChild);
        parent = leftChild;
      }
      leftChild = parent * 2 + 1;
      rightChild = parent * 2 + 2;
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
