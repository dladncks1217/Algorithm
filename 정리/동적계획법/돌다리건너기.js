function solution(n) {
  function recursive(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return recursive(n - 1) + recursive(n - 2);
  }

  return recursive(n + 1);
}

console.log(solution(7));
