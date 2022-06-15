let [n, ...arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = n.split(" ").map((n) => n * 1);

let heardAndSeen = [arr.splice(0, n[0]), arr];

const key = new Map();
for (let i = 0; i < heardAndSeen.length; i++) {
  let check = heardAndSeen[i];
  for (let j = 0; j < check.length; j++) {
    key.set(check[j], key.get(check[j]) + 1 || 1);
  }
}
let result = [...key];
result = result.sort().filter((r) => r[1] === 2);
console.log(result.length);
result.map((r) => console.log(r[0]));
