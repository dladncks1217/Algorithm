const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

let answer = [];
let orders = [];

for (let i = 0; i < input.length; i++) {
  const data = input[i].split(" ");
  if (data.length === 3) {
    orders.push([data[1], data[2]]);
    answer.push(orders.map((item) => item[0]).join(" "));
  } else if (data.length === 2) {
    orders = orders.filter((item) => item[0] !== data[1]);
    if (orders.length) answer.push(orders.map((item) => item[0]).join(" "));
    else answer.push("sleep");
  } else {
    orders.sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return a[1] - b[1];
    });
    if (!orders.length) {
      answer.push("sleep");
    } else {
      answer.push(orders.map((item) => item[0]).join(" "));
    }
  }
}

console.log(answer.join("\n"));
