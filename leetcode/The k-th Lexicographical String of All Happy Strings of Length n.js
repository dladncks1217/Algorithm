// https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
let getHappyString = function (n, k) {
  let answer = [];
  let temp = [];
  let alphabets = ["a", "b", "c"];

  function DFS(L, str) {
    if (answer.length > k) return;
    if (L === n) {
      return answer.push(str);
    } else {
      for (let i = 0; i < alphabets.length; i++) {
        if (str[str.length - 1] !== alphabets[i]) {
          DFS(L + 1, str + alphabets[i]);
        }
      }
    }
  }

  for (let i = 0; i < alphabets.length; i++) {
    DFS(1, alphabets[i]);
  }

  return answer.length >= k ? answer[k - 1] : "";
};

console.log(getHappyString(1, 4));
