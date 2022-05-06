/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  let answer = 0;
  let check = [s[0]];
  let prev = s[0];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== prev && check.indexOf(s[i]) === -1) {
      count++;
      check.push(s[i]);
      prev = s[i];
      if (i === s.length - 1) {
        answer = Math.max(count, answer);
      }
    } else {
      answer = Math.max(count, answer);
      prev = s[i];
      count = 1;
    }
  }

  return answer;
};

console.log(lengthOfLongestSubstring("dvdf"));

//   for (let i = 1; i < s.length; i++) {
//     if (s[i] !== prev) {
//       count++;
//       prev = s[i];
//     } else {
//       answer = Math.max(count, answer);
//       prev = s[i];
//       count = 1;
//     }
//   }
