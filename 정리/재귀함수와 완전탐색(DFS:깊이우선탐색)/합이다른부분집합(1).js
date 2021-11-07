function solution(n) {
  let answer = "NO";
  let sum = 0;
  n.forEach((v) => {
    sum += v;
  });
  let check = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v > n.length) {
      let checksum = 0;
      check.forEach((v, i) => {
        if (v === 1) {
          checksum += n[i];
        }
      });
      if (sum / 2 === checksum) {
        console.log(checksum);
        answer = "YES";
      }
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(0);
  console.log(answer);
  return answer;
}

solution([1, 3, 5, 6, 7, 10]);
