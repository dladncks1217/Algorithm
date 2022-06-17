let input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let dictonary = input.slice(1, N + 1);
let problem = input.slice(N + 1, N + M + 1);

const dictMap = new Map(dictonary.map((i, v) => [i, v + 1]));

problem.forEach((v) => {
  if (isNaN(v)) {
    console.log(dictMap.get(v));
  } else {
    console.log(dictonary[Number(v) - 1]);
  }
});
