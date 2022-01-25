let permute = function (nums) {
  let answer = [];
  let temp = [];
  let check = Array.from({ length: nums.length }, () => 0);

  function DFS(L) {
    if (L === nums.length) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < nums.length; i++) {
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

console.log(permute([1, 2, 3]));
