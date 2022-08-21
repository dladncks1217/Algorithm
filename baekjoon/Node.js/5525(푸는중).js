let [ioilen, len, input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// console.log(ioilen, len, input);

let ioi = "IOI";

for (let i = 1; i < ioilen; i++) {
  ioi += "OI";
}
let answer = 0;

let replaceStr = ioi.replace("I", "O"); // 바꿀 문자열
let check = input.indexOf(ioi); // 바뀔거있는지확인

while (check >= 0) {
  input = input.replace(ioi, replaceStr);

  check = input.indexOf(ioi); // 바뀔거있는지확인
  answer++;
}

console.log(answer);
