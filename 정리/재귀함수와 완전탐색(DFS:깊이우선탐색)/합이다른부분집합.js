function solution(arr) {
  let answer = "NO";
  let total = arr.reduce((a, b) => a + b, 0);
  let length = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === length) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  console.log(answer);
  return answer;
}

solution([1, 3, 5, 6, 7, 10]);
