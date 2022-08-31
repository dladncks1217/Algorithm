const [[N], [M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const trip = input.pop(); // 결과

const unionfindarr = []; // 유니온파인드연산 전 정리 배열
const set = Array.from({ length: N + 1 }, (v, i) => i); // 유니온파인드 set

// union연산 할 input
input.forEach((v, idx) => {
  for (let i = 0; i < v.length; i++) {
    if (v[i] === 1) {
      unionfindarr.push([idx + 1, i + 1]);
    }
  }
});

// find 연산
function finds(find) {
  if (set[find] === find) {
    return find;
  } else {
    return (set[find] = finds(set[find]));
  }
}

// union 연산
function union(a, b) {
  let parentA = finds(a);
  let parentB = finds(b);

  parentA > parentB ? (set[parentA] = parentB) : (set[parentB] = parentA);
}

// 그래프들 union
unionfindarr.forEach((v) => {
  union(v[0], v[1]);
});

// 같은 집합인지 확인
let startParent = set[trip[0]];
let result = "YES";
for (let i = 1; i < trip.length; i++) {
  if (set[trip[i]] === startParent) continue;
  else {
    result = "NO";
    break;
  }
}

console.log(result);
