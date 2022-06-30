const input = +require("fs").readFileSync("./dev/stdin").toString().trim();

let zoo = Array.from({ length: input + 2 }, () => []);
zoo[1] = [1, 1, 1];

for (let i = 2; i <= input + 1; i++) {
  zoo[i][0] = (zoo[i - 1][1] + zoo[i - 1][2]) % 9901;
  zoo[i][1] = (zoo[i - 1][0] + zoo[i - 1][2]) % 9901;
  zoo[i][2] = (zoo[i - 1][0] + zoo[i - 1][1] + zoo[i - 1][2]) % 9901;
}

console.log((zoo[input][0] + zoo[input][1] + zoo[input][2]) % 9901);
