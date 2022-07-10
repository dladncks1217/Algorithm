const [aboutBag, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((k) => +k);
    return v;
  });

const maxBag = aboutBag[1]; // 가방 최대용량
const dy = Array.from({ length: maxBag + 1 }, () => 0); // 가방 용량

for (let i = 0; i < input.length; i++) {
  const [weight, value] = [input[i][0], input[i][1]];
  // 최대용량부터 weight보다 큰경우까지만
  for (let k = maxBag; k >= weight; k--) {
    //dy의 k용량은 기본 k 인덱스값 vs (기본 k 인덱스값+value)
    dy[k] = Math.max(dy[k], dy[k - weight] + value);
    console.log(dy);
  }
}

console.log(Math.max(...dy));
