const [[length], ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let input = inputs.map((v) => +v);

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}

let heap = new MinHeap();

input.forEach((v) => {
  heap.heappush(v);
});

let resultSum = 0;
while (heap.size() > 1) {
  //   console.log(heap);
  let a = heap.heappop();
  let b = heap.heappop();

  heap.heappush(a + b);
  resultSum += a + b;
}
console.log(resultSum);
