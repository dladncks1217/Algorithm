// https://leetcode.com/problems/combinations/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let combine = function (n, k) {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0);
  let temp = [];
  check[0] = 1;
  function DFS(L, s) {
    if (L > k) {
      return answer.push(temp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp.push(i);
          DFS(L + 1, i + 1);
          temp.pop();
          check[i] = 0;
        }
      }
    }
  }

  DFS(1, 1);
  return answer;
};
console.log(combine(4, 2));
