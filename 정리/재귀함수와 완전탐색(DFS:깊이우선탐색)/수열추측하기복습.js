function solution(n, f) {
  let answer;
  let flag = 0;
  let combination_Arr = Array.from(Array(n + 1), () => Array(n).fill(0));
  let combination_Result = Array.from({ length: n }, () => 0);
  let permutation_result = [];
  let permutation_temp = Array.from({ length: n + 1 }, () => 0);
  function combination(n, r) {
    if (combination_Arr[n][r] > 0) {
      return combination_Arr[n][r];
    }
    if (n === r || r === 0) {
      return 1;
    } else {
      return (combination_Arr[n][r] =
        combination(n - 1, r - 1) + combination(n - 1, r));
    }
  }

  function permutation(L, sum) {
    if (flag === 1) return;
    if (L === n && f === sum) {
      answer = permutation_result.slice();
      flag = 1;
    } else {
      for (let i = 0; i < n; i++) {
        if (permutation_temp[i] === 0) {
          permutation_temp[i] = 1;
          permutation_result.push(i + 1);
          permutation(
            L + 1,
            sum + permutation_result[L] * combination_Result[L]
          );
          permutation_temp[i] = 0;
          permutation_result.pop();
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    combination_Result[i] = combination(n - 1, i);
  }
  permutation(0, 0);

  return answer;
}

console.log(solution(4, 16));
