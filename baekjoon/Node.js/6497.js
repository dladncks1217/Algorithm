const [[vertices, edges], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let result = [];
let node = vertices;
let count = edges;

for (let i = 0; i < input.length; i++) {
  if (input[i].length === 2) {
    node = input[i][0];
    count = input[i][1];
    if (node === 0 && count === 0) break;
    else continue;
  } else {
    function find(parent) {
      if (set[parent] === parent) return parent;
      return (set[parent] = find(set[parent]));
    }

    function union(a, b) {
      const parentA = find(a);
      const parentB = find(b);

      parentA > parentB ? (set[parentA] = parentB) : (set[parentB] = parentA);
    }

    function checkCycle(a, b) {
      const parentA = find(a);
      const parentB = find(b);
      if (parentA === parentB) return true;
      return false;
    }

    let arr = [];
    const countCheck = i;
    for (let k = i; k < count + countCheck; k++) {
      arr.push(input[k].slice());
      i++;
    }

    let answer = 0;
    arr.sort((a, b) => a[2] - b[2]);

    const set = Array.from({ length: node }, (v, i) => i);

    let resultMax = arr.reduce((sum, v) => {
      return (sum += v[2]);
    }, 0);

    for (const inputs of arr) {
      const [vertices1, vertices2, cost] = inputs;
      if (!checkCycle(vertices1, vertices2)) {
        answer += cost;
        union(vertices1, vertices2);
      }
    }

    result.push(resultMax - answer);
  }
  i--;
}

console.log(result.join("\n"));
