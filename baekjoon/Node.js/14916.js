let input = +require("fs").readFileSync("./dev/stdin").toString().trim();

let answer = 0;
if (input === 1 || input === 3) return console.log(-1);
while (input > 0) {
  if (input < 0) {
    return console.log(-1);
  } else if (input % 5 === 0) {
    return console.log(answer + input / 5);
  } else {
    answer++;
    input -= 2;
    if (input === 0) {
      return console.log(answer);
    }
  }
}
