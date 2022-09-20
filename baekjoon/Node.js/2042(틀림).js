// 같은 코드인데 파이썬만 맞음..
const [[N, M, K], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

// 각 데이터들이랑 계산들 서로 쪼개기
const datas = [];
const calculate = [];
for (let i = 0; i < input.length; i++) {
  if (input[i].length === 1) {
    datas.push(input[i][0]);
  } else {
    calculate.push(input[i]);
  }
}

// 전체 데이터 개수는 최대 1000000개
const arr = Array.from({ length: 1000001 }, () => 0);
const tree = Array.from({ length: 1000001 }, () => 0);

// i번째 수까지 누적 합 계산하는 함수
function prefix_sum(i) {
  let result = 0;
  while (i > 0) {
    result += tree[i];
    i -= i & -i; // 0이 아닌 마지막 비트만큼 빼가면서 이동
  }
  return result;
}

// i번째 수를 dif만큼 더하는 함수
function update(i, dif) {
  while (i <= N) {
    tree[i] += dif;
    i += i & -i;
  }
}

// start~end 구간 합 구하는 함수
function interval_sum(start, end) {
  return prefix_sum(end) - prefix_sum(start - 1);
}

// 일단 값들 집어넣기
for (let i = 1; i < N + 1; i++) {
  arr[i] = datas[i - 1];
  update(i, datas[i - 1]);
}

for (let i = 0; i < M + K; i++) {
  const [a, b, c] = calculate[i];
  if (a === 1) {
    // 바뀐 크기 (dif)만큼 적용
    update(b, c - arr[b]);
    arr[b] = c;
  } else {
    console.log(interval_sum(b, c));
  }
}
