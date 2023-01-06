const fs = require("fs");
const inputs = fs.readFileSync("./dev/stdin").toString().split("\n");

const [N, M] = inputs.shift().split(" ").map(Number);
const input = inputs.map((v) => {
  v = v.split(" ").map(Number);
  return v;
});
console.log(inputs);
let answer = 0;

const move = {
  1: {
    1: {
      dx: [1],
      dy: [0],
    },
    2: {
      dx: [1, -1],
      dy: [0, 0],
    },
    3: {
      dx: [1, 0],
      dy: [0, 1],
    },
    4: {
      dx: [1, -1, 0],
      dy: [0, 0, 1],
    },
    5: {
      dx: [1, 0, -1, 0],
      dy: [0, -1, 0, 1],
    },
  },
  2: {
    1: {
      dx: [0],
      dy: [-1],
    },
    2: {
      dx: [0, 0],
      dy: [1, -1],
    },
    3: {
      dx: [1, 0],
      dy: [0, -1],
    },
    4: {
      dx: [1, 0, 0],
      dy: [0, -1, 1],
    },
    5: {
      dx: [1, 0, -1, 0],
      dy: [0, -1, 0, 1],
    },
  },
  3: {
    1: {
      dx: [-1],
      dy: [0],
    },
    2: {
      dx: [1, -1],
      dy: [0, 0],
    },
    3: {
      dx: [-1, 0],
      dy: [0, -1],
    },
    4: {
      dx: [1, -1, 0],
      dy: [0, 0, -1],
    },
    5: {
      dx: [1, 0, -1, 0],
      dy: [0, -1, 0, 1],
    },
  },
  4: {
    1: {
      dx: [0],
      dy: [1],
    },
    2: {
      dx: [0, 0],
      dy: [1, -1],
    },
    3: {
      dx: [-1, 0],
      dy: [0, 1],
    },
    4: {
      dx: [0, -1, 0],
      dy: [-1, 0, 1],
    },
    5: {
      dx: [1, 0, -1, 0],
      dy: [0, -1, 0, 1],
    },
  },
};

function DFS(sx, sy, direction, x, y, type, graph, check) {
  for (let i = 0; i < move[direction][type].dx.length; i++) {
    const nx = move[direction][type].dx[i] + x;
    const ny = move[direction][type].dy[i] + y;
    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < M &&
      ny < N &&
      !check[ny][nx] &&
      //   (graph[ny][nx] === 0 || graph[ny][nx] === -1)
      graph[ny][nx] !== 6
    ) {
      if (nx === sx || ny === sy) {
        graph[ny][nx] = -1;
        check[ny][nx] = true;
        DFS(sx, sy, direction, nx, ny, type, graph, check);
      }
    }
  }
}

function graphCheck(graph) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    const sagak = graph[i].filter((v) => v == 0);
    sum += sagak.length;
  }
  return sum;
}

let check = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => false)
);
let graph = input.map((v) => {
  return v.slice();
});

for (let find = 5; find >= 1; find--) {
  for (let i = 0; i < N; i++) {
    for (let k = 0; k < M; k++) {
      //   if (input[i][k] !== 6 && input[i][k] !== 0) {
      if (input[i][k] === find) {
        const type = input[i][k];
        let graph1 = graph.map((v) => {
          return v.slice();
        });
        let graph2 = graph.map((v) => {
          return v.slice();
        });
        let graph3 = graph.map((v) => {
          return v.slice();
        });
        let graph4 = graph.map((v) => {
          return v.slice();
        });

        let check1 = graph.map((v) => {
          return v.map((v) => {
            if (v !== 6) return false;
            return true;
          });
        });

        let check2 = graph.map((v) => {
          return v.map((v) => {
            if (v !== 6) return false;
            return true;
          });
        });
        let check3 = graph.map((v) => {
          return v.map((v) => {
            if (v !== 6) return false;
            return true;
          });
        });
        let check4 = graph.map((v) => {
          return v.map((v) => {
            if (v !== 6) return false;
            return true;
          });
        });
        graph1[i][k] = -1;
        graph2[i][k] = -1;
        graph3[i][k] = -1;
        graph4[i][k] = -1;

        DFS(k, i, 3, k, i, type, graph3, check3);
        DFS(k, i, 4, k, i, type, graph4, check4);
        DFS(k, i, 2, k, i, type, graph2, check2);
        DFS(k, i, 1, k, i, type, graph1, check1);

        if (graphCheck(graph1) < graphCheck(graph)) {
          graph = graph1;
          check = check1;
        }

        if (graphCheck(graph2) < graphCheck(graph)) {
          graph = graph2;
          check = check2;
        }

        if (graphCheck(graph3) < graphCheck(graph)) {
          graph = graph3;
          check = check3;
        }

        if (graphCheck(graph4) < graphCheck(graph)) {
          graph = graph4;
          check = check4;
        }
      }
    }
  }
}

console.log(graph);

for (let i = 0; i < N; i++) {
  //   const sagak = graph[i].filter((v) => v !== 6 && v !== -1);
  const sagak = graph[i].filter((v) => v === 0);
  answer += sagak.length;
}

console.log(answer);
