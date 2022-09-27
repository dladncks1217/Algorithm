let [S, T] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

S = S.split("");
T = T.split("");

for (let i = T.length; i > S.length; i--) {
  if (T[T.length - 1] === "A") {
    T.pop();
  } else {
    T.pop();
    T.reverse();
  }
}
T.join("") === S.join("") ? console.log(1) : console.log(0);
