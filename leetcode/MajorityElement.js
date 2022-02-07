let majorityElement = function (nums) {
  let half = nums.length / 2;
  let map = {};
  nums.forEach((v) => {
    if (map.hasOwnProperty(v)) {
      map[v] += 1;
    } else {
      map[v] = 1;
    }
  });
  for (let a in map) {
    if (map[a] >= half) {
      return parseInt(a);
    }
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
