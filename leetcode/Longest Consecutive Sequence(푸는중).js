// https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function (nums) {
  let counter = [[]];

  let mod = 10;
  for (let i = 0; i < 3; i++, mod * 10) {
    for (let k = 0; k < nums.length; k++) {
      let bucket = parseInt(nums[k] % mod);
      if (counter[bucket] === null) {
        counter[bucket] = [];
      }
      counter[bucket].push(nums[k]);
    }
  }

  let pos = 0;
  for (let i = 0; i < counter.length; i++) {
    let value = null;
    if ((counter[i] = null)) {
      while ((value = counter[i].shift()) !== null) {
        array[pos++] = value;
      }
    }
  }

  let check = 0;
  for (let i = result.length - 1; i >= 0; i--) {
    let num = result.pop();
    if (i === 0) {
      answer = Math.max(answer, check);
    }

    if (result[i - 1] + 1 === num) {
      check++;
    } else {
      answer = Math.max(answer, check);
      check = 0;
    }
  }
  return answer + 1;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
