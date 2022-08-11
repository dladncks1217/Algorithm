const [subin, sister] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }
}
let queue = new Queue();
queue.push([subin, 0]);

let answer = [0, 0];
// let queue = [[subin, 0]];

let visited = Array(100001).fill(false);
let foundLevel = false;

while (queue.length > 0) {
  let now = queue.pop();
  console.log(queue);
  let [state, level] = now;

  if (foundLevel && level > answer[0]) {
    break;
  }

  if (state === sister) {
    foundLevel = true;
    answer[0] = level;
    answer[1] += 1;
  }

  visited[state] = true;
  if (!foundLevel) {
    if (state + 1 < 100000 && visited[state + 1] === false)
      queue.push([state + 1, level + 1]);
    if (state - 1 >= 0 && visited[state - 1] === false)
      queue.push([state - 1, level + 1]);
    if (state * 2 < 100000 && state * 2 !== 0 && visited[state * 2] === false)
      queue.push([state * 2, level + 1]);
  }
}

console.log(answer.join("\n"));
