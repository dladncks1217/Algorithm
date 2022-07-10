function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let [ps, pt] = [arr[i][0], arr[i][1]];
    for (let k = m; k >= pt; k--) {
      dy[k] = Math.max(dy[k], dy[k - pt] + ps);
    }
  }
  return dy[m];
}
console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
