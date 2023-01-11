const input = +require("fs").readFileSync("./dev/stdin").toString().trim();

let answer = Infinity;

function DFS(x, visited) {
  if (visited === input) {
    answer = Math.min(answer, visited);
  }

  for (let i = 0; i <= 6; i++) {
    if (visited & (1 << i)) continue;
    DFS(i, visited | (1 << i));
  }
}

DFS(0, 0);
console.log(
  answer
    .toString(2)
    .split("")
    .filter((v) => v === "1").length
);
