let input = require("fs").readFileSync("./dev/stdin").toString().split("\n");
input = input.map((v) => {
  v = v.split(" ");
  v = v.map((v) => parseInt(v));
  return v;
});
let nodes = input.shift();
nodes = nodes[0];

let set = Array.from({ length: nodes + 1 }, (v, i) => i); // 서로가 서로 부모.

function finds(find) {
  if (set[find] === find) {
    return find;
  } else {
    return (set[find] = finds(set[find]));
  }
}

function union(a, b) {
  let parentA = finds(a);
  let parentB = finds(b);

  parentA > parentB ? (set[parentA] = parentB) : (set[parentB] = parentA);
}

input.forEach((v) => {
  if (v[0] === 0) {
    union(v[1], [v[2]]);
  } else {
    finds(v[1]) === finds(v[2]) ? console.log("YES") : console.log("NO");
  }
});
