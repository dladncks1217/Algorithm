const stack = [];
let top = 0;
let answer = "";

const cmdObj = {
  push: (x) => (stack[top++] = x),
  pop: () => {
    if (top) {
      top--;
      return stack.splice(-1);
    } else return -1;
  },
  size: () => top,
  empty: () => (!top ? 1 : 0),
  top: () => (top ? stack[top - 1] : -1),
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  input.map((line, idx) => {
    if (idx === 0) return;
    const [cmd, num] = line.split(" ");
    if (cmd === "push") {
      cmdObj[cmd](parseInt(num));
    } else answer += `${cmdObj[cmd]()}\n`;
  });

  console.log(answer);
  process.exit();
});
