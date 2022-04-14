// https://leetcode.com/problems/letter-case-permutation/
/**
 * @param {string} s
 * @return {string[]}
 */
let letterCasePermutation = function (s) {
  let answer = [];
  s = s.split("");
  let temp = Array.from({ length: s.length }, () => 0);
  function DFS(L, str) {
    if (L > str.length) {
    } else {
      for (let i = 0; i < str.length; i++) {
        if (temp[i] === 0) {
          temp[i] = 1;
          if (typeof Number(str[i]) !== number) {
            // str[i] = str[i].toLowerCase();
            DFS(L + 1, s);
          }
        }
      }
    }
  }
  DFS(0, s);
  return answer;
};

console.log(letterCasePermutation("a1b2"));
