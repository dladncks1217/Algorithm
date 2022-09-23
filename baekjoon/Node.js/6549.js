const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

input.pop();

for (let i = 0; i < input.length; i++) {
  const arr = Array.from({ length: 100002 }, () => 0);

  const N = input[i].shift();
  for (let k = 1; k <= N; k++) {
    arr[k] = input[i][k - 1];
  }
  let answer = 0;

  const stack = [0];

  for (let j = 1; j <= N + 1; j++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[j]) {
      let check = stack.pop();

      answer = Math.max(answer, arr[check] * (j - stack[stack.length - 1] - 1));
    }

    stack.push(j);
  }
  console.log(answer);
}
