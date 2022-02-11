let uniquePaths = function (m, n) {
  let memo = Array.from({ length: m }, () => Array(n).fill(0));

  function DFS(x, y) {
    if (x > n - 1 || y > m - 1) return 0;
    if (memo[y][x] > 0) return memo[y][x];
    if (x === n - 1 && y === m - 1) return 1;
    else return (memo[y][x] = DFS(x + 1, y) + DFS(x, y + 1));
  }

  return DFS(0, 0);
};

console.log(uniquePaths(3, 7));
