function solution(n) {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v > n) {
      let str = "";
      check.forEach((v, i) => {
        if (v === 1) str += i + " ";
      });
      console.log(str);
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
