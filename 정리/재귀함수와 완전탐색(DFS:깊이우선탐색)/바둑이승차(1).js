function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(level, sum) {
    if (level > arr.length) {
      if (sum <= c && sum > answer) {
        answer = sum;
      }
    } else {
      DFS(level + 1, sum + arr[level]);
      DFS(level + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
