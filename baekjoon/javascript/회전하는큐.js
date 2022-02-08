// https://www.acmicpc.net/problem/1021
function solution(N, arr) {
  let num = [];
  for (let i = 1; i <= N; i++) num.push(i);

  let answer = 0;
  while (true) {
    if (arr[0] === num[0] && arr.length > 0) {
      arr.shift();
      num.shift();
      continue;
    }
    if (arr.length === 0 || num.length === 0) break;

    let targetIndex = num.indexOf(arr[0]);
    if (num.length / 2 > targetIndex) {
      num.push(num.shift());
      answer++;
    } else {
      num.unshift(num.pop());
      answer++;
    }
  }
  return answer;
}

console.log(solution(32, [27, 16, 30, 11, 6, 23]));
