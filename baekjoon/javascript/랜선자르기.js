// https://www.acmicpc.net/problem/1654
function solution(K, lans) {
  let answer = 0;
  let min = 1;
  let max = Math.max(...lans);
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    let count = 0;
    lans.forEach((v) => {
      count += Math.floor(v / mid);
    });
    if (count >= K) {
      if (mid > answer) answer = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return answer;
}

console.log(solution(11, [802, 743, 457, 539]));

/* 프로그래머스 방식으로 변형하여 풀음 */
