let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n")
  .map((v) => {
    v = v.split(" ");
    v = v.map((v) => parseInt(v));
    return v;
  });

let graph = Array.from({ length: input[0][0] + 1 }, () => []);
let find = input[0][2];
let dfsResult = [find];
let bfsResult = [find];
input.shift();

for (let x of input) {
  [start, target] = x;
  graph[start].push(target);
  if (graph.indexOf(target) === -1) graph[target].push(start);
}

// 정점 여러 개 시 작은것부터 방문 위해.
graph.forEach((v) => {
  v.sort((a, b) => a - b);
});

let check = Array.from({ length: graph.length }, () => 0); // dfs 체크배열
check[find] = 1;
function DFS(index) {
  if (graph[index].length) {
    for (let nIdx of graph[index]) {
      if (check[nIdx] === 0) {
        check[nIdx] = 1;
        dfsResult.push(nIdx);
        DFS(nIdx);
      }
    }
  }
}

DFS(find);

function BFS(root) {
  let check = Array.from({ length: graph.length }, () => 0);
  check[root] = 1;
  let queue = [root];

  while (queue.length) {
    let L = queue.shift();
    if (graph[L].length) {
      for (let nl of graph[L]) {
        if (check[nl] === 0) {
          check[nl] = 1;
          queue.push(nl);
          bfsResult.push(nl);
        }
      }
    }
  }
}
BFS(find);
console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
