const [NM, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = NM.split(" ").map((v) => +v);
const memos = input.slice(0, N);
const targets = input.slice(-M);
const notepad = {};
const output = [];

memos.forEach((memo) => {
  const [address, password] = memo.split(" ");
  notepad[address] = password;
});
targets.forEach((target) => {
  output.push(notepad[target]);
});

console.log(output.join("\n"));
