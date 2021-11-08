function solution(arr) {
  let answer = "NO";
  let total = arr.reduce((a, b) => a + b);
  console.log(total);
  function DFS(level, sum) {
    if (level === arr.length) {
      if (total / 2 === sum) {
        answer = "YES";
      }
    } else {
      DFS(level + 1, sum);
      DFS(level + 1, sum + arr[level]);
    }
  }
  DFS(0, 0);
  console.log(answer);
  return answer;
}

solution([1, 3, 5, 6, 7, 10]);
