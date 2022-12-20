const [[N, C], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let result = [];
const hash = new Map();

input.forEach((v) => {
  if (hash.has(v)) hash.set(v, hash.get(v) + 1);
  else {
    hash.set(v, 1);
  }
});

hash.forEach((value, key) => {
  result.push([key, value]);
});

result.sort((a, b) => {
  if (a[1] === b[1]) {
    const aIndex = input.indexOf(a[0]);
    const bIndex = input.indexOf(b[0]);
    return aIndex - bIndex;
  }
  return b[1] - a[1];
});

result = result.map((v) => {
  let str = "";
  for (let i = 0; i < v[1]; i += 1) {
    str += v[0] + " ";
  }
  return str.trim();
});
console.log(result.join(" "));
