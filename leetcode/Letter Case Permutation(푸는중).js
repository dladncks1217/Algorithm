// https://leetcode.com/problems/letter-case-permutation/
/**
 * @param {string} s
 * @return {string[]}
 */
let letterCasePermutation = function (s) {
  let answer = [];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  s = s.split("");
  let temp = Array.from({ length: s.length }, () => 0);
  function DFS(L, str) {
    console.log(L);
    if (L > str.length) {
      // temp.push(str.slice());
    } else {
      for (let i = 0; i < str.length; i++) {
        if (temp[i] === 0) {
          temp[i] = 1;
          // console.log(str);
          if (numbers.indexOf(str[i]) === -1) {
            let char = str[i].charCodeAt();
            if (char >= 65 && char < 91) {
              str[i] = str[i].toLowerCase();
            } else {
              str[i] = str[i].toUpperCase();
            }
            // str[i] =
            DFS(L + 1, str);
          }
          temp[i] = 0;
        }
      }
    }
  }
  DFS(0, s);
  return answer;
};

console.log(letterCasePermutation("a1b2"));
