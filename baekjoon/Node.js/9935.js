const [str, bomb] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let stack = [];
let searchStart = bomb[bomb.length - 1];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);

  if (str[i] === searchStart) {
    let last = stack.slice(-bomb.length);
    let checkstr = last.join("");

    if (bomb === checkstr) {
      stack.splice(-bomb.length);
    }
  }
}

stack.length > 0 ? console.log(stack.join("")) : console.log("FRULA");
