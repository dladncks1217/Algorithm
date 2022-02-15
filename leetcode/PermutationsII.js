// https://leetcode.com/problems/permutations-ii
let permuteUnique = function (nums) {
  let answer = [];
  let temp = [];
  let check = Array.from({ length: nums.length }, () => 0);
  nums.sort((a, b) => a - b);
  function DFS(L) {
    if (L === nums.length) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1] && check[i - 1] === 1) continue;
        if (check[i] === 0) {
          check[i] = 1;
          temp.push(nums[i]);
          DFS(L + 1);
          check[i] = 0;
          temp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
};
console.log(permuteUnique([3, 3, 0, 3]));
