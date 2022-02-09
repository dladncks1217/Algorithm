// https://leetcode.com/problems/unique-paths/
let uniquePaths = function (m, n) {
  let arr = Array.from({ length: m }, () => Array(n).fill(0));
  arr[0][0] = 1;
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      if (i === 0 || k === 0) arr[k][i] = 1;
      else arr[k][i] = arr[k - 1][i] + arr[k][i - 1];
    }
  }

  return arr[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
