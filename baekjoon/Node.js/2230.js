const [NM, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const arr = input.map((v) => v[0]);
const [N, M] = NM;

arr.sort((a, b) => a - b);
let answer = 2000000001;

let left = 0;
for (let right = 0; left < N && right < N; ) {
  let check = arr[right] - arr[left];
  if (check >= M) {
    answer = Math.min(answer, check);
    left++;
  } else {
    right++;
  }
}

console.log(answer);
