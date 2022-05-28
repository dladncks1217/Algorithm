function MinHeap() {
  this.heap = []; // 힙으로 들어갈 배열.

  arguments.callee.prototype.insert = (number) => {
    let last = this.heap.length;
    this.heap[last] = number;
    heapUp(this.heap, last); // 끝애서부터 데이터 넣고 재귀로 탐색하며 확인함
  };

  arguments.callee.prototype.delete = () => {
    if (this.heap.length === 1) {
      this.heap.pop();
      return;
    }
    if (this.heap.length) {
      this.heap[0] = this.heap.pop(); // 제일 마지막 원소 맨앞으로.
      heapDown(this.heap, 0); // 맨 위에원소 집어두고 밑으로 빼가기.
    }
  };
}

function heapUp(self, idx) {
  if (idx > 0) {
    let parent = parseInt((idx - 1) / 2);
    if (self[idx] < self[parent]) {
      [self[idx], self[parent]] = [self[parent], self[idx]];
      heapUp(self, parent);
    }
  }
}

function heapDown(self, idx) {
  let left = 0;
  let right = 0;
  let smallest;
  // idx*2+1이 끝일경우 왼쪽상황.
  if (idx * 2 + 1 < self.length) {
    left = self[idx * 2 + 1];
    // idx*2+2이 끝일경우 왼쪽상황.
    if (idx * 2 + 2 < self.length - 1) {
      right = self[idx * 2 + 2];
    }
    if (left < right) {
      smallest = idx * 2 + 1;
    } else {
      smallest = idx * 2 + 2;
    }
    // idx랑 smallest 바꿔야하면 바꿔주고 재귀호출
    if (self[idx] > self[smallest]) {
      [self[idx], self[smallest]] = [self[smallest], self[idx]];
      heapDown(self, smallest);
    }
  }
}

let heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(7);
heap.insert(4);
heap.insert(2);
heap.insert(6);
heap.insert(1);
heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();

console.log(heap);
