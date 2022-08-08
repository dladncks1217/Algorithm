let input = +require("fs").readFileSync("./dev/stdin").toString().trim();

let dy = Array.from({ length: input + 1 }, () => 0);

for (let i = 2; i <= input; i++) {
  dy[i] = dy[i - 1] + 1;

  if (i % 2 === 0) {
    dy[i] = Math.min(dy[i], dy[i / 2] + 1);
  }
  if (i % 3 === 0) {
    dy[i] = Math.min(dy[i], dy[i / 3] + 1);
  }
}
console.log(dy[input]);

let result = [];
while (input > 0) {
  if (input === 1) {
    result.push(1);
    input--;
  }
  result.push(input);
  if (dy[input] === dy[input - 1] + 1) {
    input -= 1;
  } else if (dy[input] === dy[input / 2] + 1) {
    input = input / 2;
  } else if (dy[input] === dy[input / 3] + 1) {
    input = input / 3;
  }
}
result.pop();

console.log(result.join(" "));
