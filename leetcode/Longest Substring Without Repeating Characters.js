/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let answer = 1;
  const set = new Set();
  let left = 0;
  let right = 0;

  if (!s.length) return 0;

  set.add(s[0]);

  while (right < s.length - 1) {
    set.add(s[right]);
    right++;

    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};
