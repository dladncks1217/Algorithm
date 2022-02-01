// https://programmers.co.kr/learn/courses/30/lessons/12949
function solution(arr1, arr2) {
  let answer = Array.from({ length: arr1.length }, () => []);
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr2[k][j] * arr1[i][k];
      }
      answer[i].push(sum);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);

// youtube.com/watch?v=JpSe38UHaos
