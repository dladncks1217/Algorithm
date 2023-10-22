const [[L, N, T], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((data) => {
    return data.split(" ");
  });

let answer = 0;

let initialBox = Array.from({ length: Number(L) + 1 }, () => []);

input.forEach((balls) => {
  const [location, direction] = balls;
  initialBox[location].push(direction);
});

for (let i = 0; i < T; i++) {
  const boxAfterMove = Array.from({ length: Number(L) + 1 }, () => []);

  initialBox.forEach((data, ballIndex) => {
    if (data.length) {
      data.forEach((ball) => {
        if (ball === "R" && ballIndex < boxAfterMove.length - 1) {
          boxAfterMove[ballIndex + 1].push("R");
        } else if (ball === "L" && ballIndex > 0) {
          boxAfterMove[ballIndex - 1].push("L");
        } else if (ball === "R" && ballIndex === boxAfterMove.length - 1) {
          boxAfterMove[ballIndex - 1].push("L");
        } else if (ball === "L" && ballIndex === 0) {
          boxAfterMove[1].push("R");
        }
      });
    }
  });

  initialBox = boxAfterMove.slice();

  boxAfterMove.forEach((location) => {
    if (location.length > 1) answer++;
  });
}

console.log(answer);
