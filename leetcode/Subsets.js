// https://leetcode.com/problems/subsets

let subsets = function (nums) {
  let answer = [];
  function DFS(L, arr) {
    answer.push(arr);
    for (let i = L; i < nums.length; i++) {
      DFS(i + 1, arr.concat(nums[i]));
    }
  }
  DFS(0, []);
  return answer;
};

console.log(subsets([1, 2, 3]));
