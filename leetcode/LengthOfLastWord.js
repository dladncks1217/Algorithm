// https://leetcode.com/problems/length-of-last-word/submissions/
var lengthOfLastWord = function (s) {
  const str = s.trim().split(" ");
  return str[str.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
