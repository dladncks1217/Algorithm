const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
let tomatos = [];

input.shift();

input.forEach((v) => {
  let result = [];
  result = v.split(" ");
  tomatos.push(result);
});

//////////////////////////////////

function solution(tomato) {
  let answer = 0;
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let queue = [];
  for (let i = 0; i < tomato[0].length; i++) {
    for (let k = 0; k < tomato.length; k++) {
      if (tomato[k][i] === "1") {
        queue.push([i, k]);
      }
    }
  }
  let number = 0;
  while (number !== queue.length) {
    let change = false;
    let riped = queue.length;
    for (let k = 0; k < riped; k++) {
      let [x, y] = queue[k];
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (
          ny >= 0 &&
          nx >= 0 &&
          ny < tomato.length &&
          nx < tomato[0].length &&
          tomato[ny][nx] === "0"
        ) {
          change = true;
          tomato[ny][nx] = "1";
          queue.push([nx, ny]);
        }
      }
    }
    if (change === false) break;
    number++;
    answer++;
  }
  for (let i = 0; i < tomato.length; i++) {
    if (tomato[i].includes("0")) return -1;
  }

  console.log(answer);
}

solution(tomatos);
// const input = [];
// require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", (line) => {
//     input.push(line);
//   })
//   .on("close", () => {
//     let tomatos = [];
//     input.shift();
//     input.forEach((v) => {
//       let result = [];
//       result = v.split(" ");
//       tomatos.push(result);
//     });
//     console.log(input);
//     console.log(solution(input));
//     console.log("asdf");
//     process.exit();
//   });
