function solution(m, arr) {
  let answer = [];
  let isZero = Array.from({ length: arr.length }, () => 0);
  let temp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (isZero[i] === 0) {
          isZero[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
        }
        isZero[i] = 0;
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
