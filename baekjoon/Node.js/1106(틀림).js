// const [goals, ...input] = require("fs")
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
// //   .map((v) => {
// //     v = v.split(" ").map((v) => +v);
// //     return v;
// //   });

// const [goal, length] = goals.split(" ").map(Number);
// const inputs = input.map((v) => v.split(" ").map(Number));

// const dy = Array.from({ length: goal * 2 }, () => Infinity); // 적어도 C명 늘려야하니깐
// dy[0] = 0;

// // inputs.forEach((v) => {
// //   const [cost, client] = v; // 가격, 얻는 손님
// for (let [cost, client] of inputs) {
//   for (let k = client; k < dy.length; k++) {
//     dy[k] = Math.min(dy[k], dy[k - client] + cost); // 작은 값으로 변경
//   }
// }
// // });

// const result = dy.filter((_, i) => i >= goal);
// console.log(Math.min(...result));

// const [[goal, length], ...input] = require("fs")
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => {
//     v = v.split(" ").map((v) => +v);
//     return v;
//   });

// input.sort((a, b) => a[0] - b[0]);

// const dy = Array.from({ length: goal * 2 }, () => Infinity); // 적어도 C명 늘려야하니깐
// dy[0] = 0;

// input.forEach((v) => {
//   const [cost, client] = v; // 가격, 얻는 손님
//   if (dy[client] > cost) dy[client] = cost;
//   for (let k = client; k < dy.length; k++) {
//     dy[k] = Math.min(dy[k], dy[k - client] + dy[client]); // 작은 값으로 변경
//   }
// });

// const result = dy.filter((_, i) => i >= goal);
// console.log(Math.min(...result));

const [[goal, length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((v) => +v);
    return v;
  });

input.sort((a, b) => a[0] - b[0]);

const dy = Array.from({ length: goal + 1 }, () => Infinity); // 적어도 C명 늘려야하니깐
dy[0] = 0;

input.forEach((v) => {
  const [cost, client] = v; // 가격, 얻는 손님
  if (dy[client] > cost) dy[client] = cost;
  for (let k = client; k < dy.length; k++) {
    dy[k] = Math.min(dy[k], dy[k - client] + dy[client]); // 작은 값으로 변경
  }
});

const result = dy.filter((_, i) => i >= goal);
console.log(Math.min(...result));
