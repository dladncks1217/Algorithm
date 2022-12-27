const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M, K] = input.shift().trim().split(" ").map(Number);
input = input.map((v) => {
  v = v.trim().split("").map(Number);
  return v;
});

let answer = -1;

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

const graph = [];

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

for (let i = 0; i <= K; i++) {
  graph.push(
    Array.from({ length: N }, () => Array.from({ length: M }, () => Infinity))
  );
  graph[i][0][0] = 1;
}

const queue = new Queue();
queue.enqueue([0, 0, input[0][0]]);

while (queue.length) {
  const [x, y, wallCount] = queue.dequeue();

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < M && ny < N && wallCount <= K) {
      const prevData = graph[wallCount][y][x]; // 이전 위치 카운트 수
      const wallData = input[ny][nx]; // 이동하려는 위치 벽 유무

      if (wallCount + wallData > K) continue;

      // 값 갱신 가능한 상황이라면 값 갱신
      if (prevData + 1 < graph[wallCount + wallData][ny][nx]) {
        graph[wallCount + wallData][ny][nx] = prevData + 1;
        queue.enqueue([nx, ny, wallCount + wallData]);

        if (
          wallCount + wallData > 0 &&
          graph[wallCount + wallData][ny][nx] >
            graph[wallCount + wallData - 1][ny][nx]
        )
          graph[wallCount + wallData][ny][nx] =
            graph[wallCount + wallData - 1][ny][nx];
      }
    }
  }
}

let temp = [];
for (let i = 0; i <= K; i++) {
  temp.push(graph[i][N - 1][M - 1]);
}

answer = Math.min(...temp);
answer === Infinity ? console.log(-1) : console.log(answer);
