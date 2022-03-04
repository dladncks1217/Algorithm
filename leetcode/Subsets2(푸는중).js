let subsetsWithDup = function (nums) {
  let answer = [];
  nums.sort((a, b) => a - b);
  let temp = [];
  let visited = new Set();
  let check = Array.from({ length: nums.length }, () => 0);
  function DFS(L, arr) {
    if (L > nums.length) return;
    answer.push(arr.slice());
    visited.add(arr.toString());
    for (let i = L; i < nums.length; i++) {
      if (check[i] === 0) {
        arr.push(nums[i]);
        if (!visited.has(arr.toString())) {
          check[i] = 1;
          DFS(L + 1, arr);
          check[i] = 0;
        }
        arr.pop();
      }
    }
  }

  DFS(0, []);
  return answer;
};

console.log(subsetsWithDup([1, 2, 3]));
