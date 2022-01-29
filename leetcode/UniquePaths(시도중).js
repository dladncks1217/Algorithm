// https://leetcode.com/problems/unique-paths/
let uniquePaths = function (m, n) {
  let answer = 0;
  let memo = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  function DFS(y, x) {
    if (memo[y][x] > 0) return 0;
    if (x > n - 1 || y > m - 1) return 0;
    if (x === n - 1 && y === m - 1) {
      answer++;

      return answer;
    } else {
      for (let i = 0; i < 2; i++) {
        return (memo[y + 1][x + 1] = DFS(y + 1, x) + DFS(y, x + 1));
      }
    }
  }
  DFS(0, 0);

  return answer;
};

console.log(uniquePaths(3, 7));

// 백트래킹 시간초과, 메모이제이션 시도중
