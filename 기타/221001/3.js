function solution(k) {
  let answer = -1;
  let maxDp = Array.from({ length: 51 }, () => Number.MAX_SAFE_INTEGER);
  maxDp[2] = 1;
  maxDp[3] = 7;
  maxDp[4] = 4;
  maxDp[5] = 2;
  maxDp[6] = 6;
  maxDp[7] = 8;
  maxDp[8] = 10;

  add2 = ["0", "0", "1", "7", "4", "2", "6", "8"];
  maxDp[2] = "1";
  for (let i = 3; i <= 100; i++) {
    let line = "";
    if (i % 2 == 0) {
      //짝수면
      for (let k = 0; k < i / 2; k++) {
        line += "1";
      }
    } else {
      let val = i / 2 - 1;
      for (let k = 0; k < val; k++) {
        line += "1";
      }
      line = add2[i - val * 2] + "" + line;
    }
    maxDp[i] = line;
  }
  console.log(maxDp);
  return answer;
}

console.log(solution(5));
