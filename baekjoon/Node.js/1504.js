const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const N = input.shift().split(" ").map(Number)[0];
const graph = Array.from({ length: N + 1 }, () => []);
input.slice(0, -1).forEach((i) => {
  const [from, to, distance] = i.split(" ").map(Number);
  graph[from].push([to, distance]);
  graph[to].push([from, distance]);
});
const [v1, v2] = input.slice(-1)[0].split(" ").map(Number);

class minHeap {
  heapArray = [];
  constructor() {
    this.heapArray.push(null);
  }

  push(data) {
    if (this.heapArray === null) {
      this.heapArray = [];
      this.heapArray.push(null);
      this.heapArray.push(data);
    } else {
      this.heapArray.push(data);
      let inserted_idx = this.heapArray.length - 1;
      let parent_idx = parseInt(inserted_idx / 2);
      while (inserted_idx > 1) {
        if (this.heapArray[inserted_idx][1] < this.heapArray[parent_idx][1]) {
          const tmp = this.heapArray[inserted_idx];
          this.heapArray[inserted_idx] = this.heapArray[parent_idx];
          this.heapArray[parent_idx] = tmp;
          inserted_idx = parent_idx;
          parent_idx = parseInt(parent_idx / 2);
        } else {
          break;
        }
      }
    }
  }
  move_down(pop_idx) {
    const left_child = pop_idx * 2;
    const right_child = pop_idx * 2 + 1;

    if (left_child >= this.heapArray.length) {
      return false;
    } else if (right_child >= this.heapArray.length) {
      if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
        return true;
      }
      return false;
    } else {
      if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
        if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
          return true;
        }
        return false;
      } else {
        if (this.heapArray[pop_idx][1] > this.heapArray[right_child][1]) {
          return true;
        }
        return false;
      }
    }
  }

  pop() {
    if (this.heapArray === null) {
      return null;
    } else {
      const return_data = this.heapArray[1];
      this.heapArray[1] = this.heapArray[this.heapArray.length - 1];
      this.heapArray.pop();
      let popped_idx = 1;
      while (this.move_down(popped_idx)) {
        const left_child = popped_idx * 2;
        const right_child = popped_idx * 2 + 1;
        if (right_child >= this.heapArray.length) {
          if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
            const tmp = this.heapArray[popped_idx];
            this.heapArray[popped_idx] = this.heapArray[left_child];
            this.heapArray[left_child] = tmp;
            popped_idx = left_child;
          }
        } else {
          if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
            if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
              const tmp = this.heapArray[popped_idx];
              this.heapArray[popped_idx] = this.heapArray[left_child];
              this.heapArray[left_child] = tmp;
              popped_idx = left_child;
            }
          } else {
            if (
              this.heapArray[popped_idx][1] > this.heapArray[right_child][1]
            ) {
              const tmp = this.heapArray[popped_idx];
              this.heapArray[popped_idx] = this.heapArray[right_child];
              this.heapArray[right_child] = tmp;
              popped_idx = right_child;
            }
          }
        }
      }
      return return_data;
    }
  }
}

let answer = Infinity;

// const graph = Array.from({ length: N + 1 }, () => []);

function dijkstra(start, end) {
  const dist = Array.from({ length: N + 1 }, () => Infinity);
  dist[start] = 0;

  const pq = new minHeap();
  pq.push([start, 0]);

  while (pq.heapArray.length > 1) {
    const curr = pq.pop()[0];

    for (const edge of graph[curr]) {
      const [next, nCost] = edge;
      if (dist[next] >= dist[curr] + nCost) {
        dist[next] = dist[curr] + nCost;

        pq.push([next, dist[next]]);
      }
    }
  }

  return dist[end];
}

answer = Math.min(
  dijkstra(1, v1) + dijkstra(v1, v2) + dijkstra(v2, N),
  dijkstra(1, v2) + dijkstra(v2, v1) + dijkstra(v1, N)
);

answer === Infinity ? console.log(-1) : console.log(answer);
