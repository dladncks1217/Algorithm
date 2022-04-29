/**
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  answer = 0;
  let maxnum = Number.MIN_SAFE_INTEGER;
  let result = [];
  nums.forEach((v) => {
    maxnum = Math.max(maxnum, v);
  });
  let count = Array.from({ length: maxnum + 1 }, () => 0);

  nums.forEach((v) => {
    count[v]++;
  });
  //   console.log(count);

  // 누적합
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  //   console.log(count);

  for (let j = 0; j < nums.length; j++) {
    result[count[nums[j]] - 1] = nums[j];
    count[nums[j]] -= 1;
  }
  //   console.log(result);

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

console.log(longestConsecutive([0, -1]));
