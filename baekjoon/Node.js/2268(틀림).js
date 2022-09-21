const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const arr = Array.from({ length: N + 1 }, () => 0);
const tree = Array.from({ length: N + 1 }, () => 0);

function prefix_sum(i) {
  let result = 0;
  while (i > 0) {
    result += tree[i];
    i -= i & -i;
  }
  return result;
}

function update(i, dif) {
  while (i <= N) {
    tree[i] += dif;
    i += i & -i;
  }
}

function interval_sum(start, end) {
  return prefix_sum(end) - prefix_sum(start - 1);
}

let result = [];

for (let i = 1; i <= input.length; i++) {
  let [num, p, q] = input[i - 1];

  if (num === 1) {
    update(p, q - arr[p]);
    arr[p] = q;
  } else {
    // q < p ? ([p, q] = [q, p]) : "";
    result.push(interval_sum(p, q));
  }
}

console.log(result.join("\n"));
