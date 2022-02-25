// https://leetcode.com/problems/climbing-stairs
/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function (n) {
  let memo = Array.from({ length: n + 1 }, () => 0);
  memo[1] = 1;
  memo[2] = 2;
  function DFS(result) {
    if (memo[result] > 0) return memo[result];
    else {
      return (memo[result] = DFS(result - 1) + DFS(result - 2));
    }
  }
  DFS(n);
  return memo[n];
};

console.log(climbStairs(44));
