// https://leetcode.com/problems/longest-palindromic-substring/
function check(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str.length - 1 - i === 1 || str.length - 1 - i === 0) return true;
    if (str[i] === str[str.length - i - 1]) continue;
    else return false;
  }
}
let longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let str = s;
  s = s.split("");
  let answer = "";

  for (let i = s.length - 1; i > 0; i--) {
    for (let k = 0; k < s.length; k++) {
      if (s[k] === s[i]) {
        if (answer.length <= i - k) {
          //   console.log(str.substring(k, i + 1));
          if (check(str.substring(k, i + 1))) answer = str.substring(k, i + 1);
        }
      }
    }
  }
  return answer;
};

console.log(longestPalindrome("a"));
