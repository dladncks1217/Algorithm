function solution(n, arr) {
  let answer = [];
  let temp = Array.from({ length: n }, () => 0);
  function DFS(L, s) {
    if (L === n) {
      let sum = temp.reduce((acc, item) => (acc += item));
      if (sum % 6 === 0) {
        answer.push(temp.slice());
      }
    } else {
      for (let i = s; i < arr.length; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 0);
  return answer.length;
}

console.log(solution(3, [2, 4, 5, 8, 12]));
