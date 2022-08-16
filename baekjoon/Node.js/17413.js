let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("");

let stack = [];
let queue = [];
let answer = "";
let isOpen = false;
let size = input.length + 1;
for (let i = 0; i < size; i++) {
  let ch = input[i];
  if (ch === "<") {
    isOpen = true;
    if (stack.length > 0) {
      answer += stack.reverse().join("");
      stack = [];
    }
  } else if (ch === ">") {
    isOpen = false;
    answer += queue.join("") + ch;
    queue = [];
    continue;
  } else if ((ch === " " && !isOpen) || ch === undefined) {
    answer += stack.reverse().join("").trim() + (ch === " " ? ch : "");
    stack = [];
    continue;
  }

  if (isOpen) {
    queue.push(ch);
  } else if (!isOpen) {
    stack.push(ch);
  }
}
console.log(answer);
