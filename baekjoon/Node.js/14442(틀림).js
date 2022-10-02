let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      this.tail = null;
    }

    const pointer = this.head;

    this.head = this.head.next;
    this.length--;

    return pointer.value;
  }

  front() {
    return this.head.value;
  }
}

let [N, M, K] = input[0].split(" ").map(Number);
input = input.slice(1).map((v) => v.split("").map(Number));
K++;
const check = Array.from(new Array(N), () => new Array());
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    check[i][j] = new Array(K).fill(0);
  }
}

check[0][0][0] = 1;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const queue = new Queue();
queue.enqueue([0, 0, 0]);

let idx = 0;

function BFS() {
  while (idx !== queue.length) {
    const [y, x, isBreak] = queue.dequeue(); // 현재x, y, 벽 부숨여부

    if (x === M - 1 && y === N - 1) return check[y][x][isBreak];

    for (let i = 0; i < dx.length; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      // 유효한 좌표인지
      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        if (input[ny][nx] === 0 && check[ny][nx][isBreak] === 0) {
          // 벽 없는곳이면
          check[ny][nx][isBreak] = check[y][x][isBreak] + 1;
          queue.enqueue([ny, nx, isBreak]);
        } else if (input[ny][nx] === 1 && isBreak < K) {
          // 벽 있는데
          check[ny][nx][isBreak + 1] = check[y][x][isBreak] + 1;
          queue.enqueue([ny, nx, isBreak + 1]);
        }
      }
    }
    idx++;
  }
  return -1;
}

console.log(BFS());
