let maxArea = function (height) {
  let max = Number.MIN_SAFE_INTEGER;
  let lt = 0,
    rt = height.length - 1;

  while (lt < rt) {
    let width = rt - lt;
    if (height[rt] > height[lt]) {
      max = Math.max(max, width * height[lt]);
      lt++;
    } else {
      max = Math.max(max, width * height[rt]);
      rt--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
