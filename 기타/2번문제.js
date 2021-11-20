function solution(time, gold, upgrade) {
  let answer = -1;

  let getGolds = upgrade.map((v, i) => {
    return Math.floor(time / v[1]);
  });

  let getMoney = getGolds.map((v) => {
    return v * gold;
  });

  let Result = getMoney.map((v, i) => {
    return v - upgrade[i][0];
  });
  console.log(Result);
  return answer;
}

console.log(
  solution(100, 200, [
    [0, 5],
    [1500, 3],
    [3000, 1],
  ])
);
