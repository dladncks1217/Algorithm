function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER,
    maxvalue = 0;
  arr.forEach((v) => {
    let sum = 0;
    let sumresult = v.toString().split("");
    sumresult.forEach((v) => {
      sum += Number(v);
    });
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
