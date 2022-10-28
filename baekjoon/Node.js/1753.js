const [[v, e], [startV], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

class MinHeap {
  constructor() {
    this.nodes = [];
  }

  insert(value) {
    this.nodes.push(value);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;

    const currentNode = this.nodes[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.nodes[parentIndex];
    if (parentNode.cost <= currentNode.cost) return;

    this.nodes[index] = parentNode;
    this.nodes[parentIndex] = currentNode;
    index = parentIndex;
    this.bubbleUp(index);
  }

  extract() {
    const min = this.nodes[0];
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return min;
    }
    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.nodes.length;
    let minimum = index;

    if (!this.nodes[rightChildIndex] && !this.nodes[leftChildIndex]) return;
    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex].cost < this.nodes[minimum].cost) {
        minimum = leftChildIndex;
      }
      return;
    }

    if (this.nodes[leftChildIndex].cost > this.nodes[rightChildIndex].cost) {
      if (
        rightChildIndex <= length &&
        this.nodes[rightChildIndex].cost < this.nodes[minimum].cost
      ) {
        minimum = rightChildIndex;
      }
    } else {
      if (
        leftChildIndex <= length &&
        this.nodes[leftChildIndex].cost < this.nodes[minimum].cost
      ) {
        minimum = leftChildIndex;
      }
    }

    if (minimum !== index) {
      let t = this.nodes[minimum];
      this.nodes[minimum] = this.nodes[index];
      this.nodes[index] = t;
      this.trickleDown(minimum);
    }
  }
}

let linkedInfo = (input) => {
  let links = Array(v + 1);
  input.forEach((edge) => {
    if (!links[edge[0]]) links[edge[0]] = [];
    links[edge[0]].push({
      vertex: edge[1],
      cost: edge[2],
    });
  });
  return links;
};

let dijkstra = (links, startV) => {
  let dist = Array(v + 1).fill(Infinity);
  dist[0] = -1;
  dist[startV] = 0;
  let minHeap = new MinHeap();
  const start = {
    vertex: startV,
    cost: 0,
  };
  minHeap.insert(start);
  while (minHeap.nodes.length) {
    const selected = minHeap.extract();
    const startVertex = selected.vertex,
      beforeCost = selected.cost;
    if (links[startVertex] === undefined) continue;
    if (dist[startVertex] < beforeCost) continue;
    links[startVertex].forEach((edge) => {
      const { vertex, cost } = edge;
      if (dist[vertex] <= dist[startVertex] + cost) return;
      dist[vertex] = dist[startVertex] + cost;
      const next = {
        vertex,
        cost: dist[startVertex] + cost,
      };
      minHeap.insert(next);
    });
  }
  return dist;
};

let print = (dist) => {
  let answer = "";
  for (let i = 1; i < dist.length; i++) {
    if (dist[i] === Infinity) answer += "INF" + "\n";
    else answer += dist[i] + "" + "\n";
  }
  console.log(answer.trim());
};

let links = linkedInfo(input);
let table = dijkstra(links, startV);
print(table);
