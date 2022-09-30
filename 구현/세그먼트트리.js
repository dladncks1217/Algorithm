// 데이터 갯수
const N = 5;
// 변경횟수
const M = 2;
// 구간합계산횟수
const K = 2;

// 전체 데이터 개수는 최대 1000000개
const arr = Array.from({ length: 101 }, () => 0);
const tree = Array.from({ length: 101 }, () => 0);

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

let check = [1, 2, 3, 4, 5];
for (let i = 1; i <= 5; i++) {
  let x = check[i - 1];
  arr.push(check[i - 1]);
  update(i, x);
}

console.log(tree);

// for(let i = 0;i<M+K;i++){

// }
