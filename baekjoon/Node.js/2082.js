const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

function compareNumber(num1, num2) {
  let canUse = true;
  for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 3; k++) {
      if (num1[i][k] !== num2[i][k]) {
        if (num2[i][k] === "#") canUse = false;
      }
    }
  }

  return canUse;
}

let answer = [0, 0, 0, 0];

const numbers = [
  ["###", "#.#", "###", "..#", "###"],
  ["###", "#.#", "###", "#.#", "###"],
  ["###", "..#", "..#", "..#", "..#"],
  ["###", "#..", "###", "#.#", "###"],
  ["###", "#..", "###", "..#", "###"],
  ["#.#", "#.#", "###", "..#", "..#"],
  ["###", "..#", "###", "..#", "###"],
  ["###", "..#", "###", "#..", "###"],
  ["..#", "..#", "..#", "..#", "..#"],
  ["###", "#.#", "#.#", "#.#", "###"],
];

const hour1 = input.map((item) => item[0]);
const hour2 = input.map((item) => item[1]);
const minute1 = input.map((item) => item[2]);
const minute2 = input.map((item) => item[3]);

numbers.forEach((number, index) => {
  const hour1Check = compareNumber(number, hour1);
  const hour2Check = compareNumber(number, hour2);
  const minute1Check = compareNumber(number, minute1);
  const minute2Check = compareNumber(number, minute2);

  if (hour1Check) {
    answer[0] = 9 - index;
  }
  if (hour2Check) {
    answer[1] = 9 - index;
  }
  if (minute1Check) {
    answer[2] = 9 - index;
  }

  if (minute2Check) {
    answer[3] = 9 - index;
  }
});

console.log(`${answer[0]}${answer[1]}:${answer[2]}${answer[3]}`);
