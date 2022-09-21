const [[N, Q], data, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

// console.log(N, Q, data, input);

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

for (let i = 1; i < N + 1; i++) {
  arr[i] = data[i - 1];
  update(i, data[i - 1]);
}

for (let i = 0; i < Q; i++) {
  let [x, y, a, b] = input[i];
  y < x ? ([x, y] = [y, x]) : "";

  console.log(interval_sum(x, y));
  update(a, b - arr[a]);
  arr[a] = b;
}
