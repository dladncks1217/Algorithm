const [[N], [M], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

// if (input === undefined) input = [];

// 하나도 고장 안났을때
if (input === undefined) {
  const len = N.toString().length;
  len < Math.abs(100 - N) ? console.log(len) : console.log(Math.abs(100 - N));
} else {
  const broken = Array.from({ length: 10 }, () => false);
  // 고장난 리모컨 체크
  input.forEach((v) => {
    broken[v] = true;
  });
  const set = new Set();

  // 결과 들어갈 숫자들 배열
  const nums = [];

  // 찾고자 하는 숫자 길이
  const findLength = N.toString().length;

  // 카테고리 0번 : 딱 맞는숫자, 1번 : 아래숫자
  function DFS(L, maxL, num, category) {
    if (category === 0 && L === maxL) {
      if (!set.has(+num)) {
        set.add(+num);
        return nums.push(+num);
      } else return;
    } else if (category === 1 && L === maxL - 1) {
      if (!set.has(+num)) {
        set.add(+num);
        return nums.push(+num);
      } else return;
    } else {
      for (let i = 0; i <= 9; i++) {
        // if (num.length === 0 && i === 0 && N.toString().length > 1) continue;
        // 고장나지 않았을 때만.
        if (!broken[i]) {
          DFS(L + 1, maxL, num + i, category);
        }
      }
    }
  }

  for (let i = 0; i <= 9; i++) {
    if (!broken[i]) {
      if (i !== 1) {
        DFS(0, findLength, "", 0);
        if (N.toString().length > 1) {
          DFS(0, findLength, "", 1);
        }
      } else {
        DFS(1, findLength + 1, "1", 0);
      }
    }
  }
  //   console.log(nums);

  //   console.log(nums[nums.length - 1]);

  let numcheck = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (min >= Math.abs(nums[i] - N)) {
      numcheck = nums[i];

      min = Math.abs(nums[i] - N);
    }
  }

  min += numcheck.toString().length;

  min = Math.min(min, Math.abs(N - 100));
  console.log(min);
}

// else if (M === 9 && !broken[0]) {
//     N + 1 < Math.abs(N - 100)
//       ? console.log(N + 1)
//       : console.log(Math.abs(N - 100));
//   }
