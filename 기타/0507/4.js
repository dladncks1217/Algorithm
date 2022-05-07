function solution(n, paths, gates, summits) {
  let answer = [];
  let dy = Array.from({ length: n }, () => Infinity);

  return answer;
}

console.log(
  solution(
    6,
    [
      [1, 2, 3],
      [2, 3, 5],
      [2, 4, 2],
      [2, 5, 4],
      [3, 4, 4],
      [4, 5, 3],
      [4, 6, 1],
      [5, 6, 1],
    ],
    [1, 3],
    [5]
  )
);
