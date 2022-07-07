const [number, powNum, divisionNum] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => BigInt(v));

function pow_calculate(a, b) {
  if (b === 0n) {
    return BigInt(1);
  } else {
    const temp = pow_calculate(a, BigInt(parseInt(b / BigInt(2))));
    if (b % BigInt(2) === 0n) {
      return (temp * temp) % divisionNum;
    } else {
      return (a * temp * temp) % divisionNum;
    }
  }
}

console.log(parseInt(pow_calculate(number, powNum)));

// 지수법칙 a^(n+m) = a^n * a^m
// 모듈러 성질 (a*b)%c = (a%c * b%c)%c
