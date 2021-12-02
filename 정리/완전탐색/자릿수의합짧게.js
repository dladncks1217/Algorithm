function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER,
    maxvalue = 0;
  arr.forEach((v) => {
    let sum = v
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      maxvalue = v;
    }
    if (sum === max) {
      maxvalue > v ? _ : (maxvalue = v);
    }
  });
  return maxvalue;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
