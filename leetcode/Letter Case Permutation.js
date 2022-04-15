// https://leetcode.com/problems/letter-case-permutation/
/**
 * @param {string} s
 * @return {string[]}
 */
let letterCasePermutation = function (s) {
  let answer = [];
  s = s.split("");
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  function DFS(str, idx) {
    if (idx > s.length - 1) {
      answer.push(str);
    } else {
      if (numbers.indexOf(s[idx]) !== -1) {
        DFS(str + s[idx], idx + 1);
      } else {
        DFS(str + s[idx].toLowerCase(), idx + 1);
        DFS(str + s[idx].toUpperCase(), idx + 1);
      }
    }
  }

  DFS("", 0);

  return answer;
};

console.log(letterCasePermutation("a1b2"));
