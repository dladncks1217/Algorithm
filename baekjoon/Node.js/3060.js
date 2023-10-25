const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
//   const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

const repeat = Number(input.shift());

for (let i = 0; i < repeat; i++) {
  let food = input[i * 2];
  const eat = i * 2 + 1;
  const eatDatas = input[eat].split(" ").map(Number);
  let day = 1;

  let resultFood = eatDatas.reduce((total, current) => current + total, 0);

  while (food >= resultFood) {
    day++;
    resultFood = resultFood * 4;
  }
  console.log(day);
}
