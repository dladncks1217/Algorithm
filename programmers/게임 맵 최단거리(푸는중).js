function solution(maps) {
  let answer = 0;
  let row = maps[0].length;
  let col = maps.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let queue = [[0, 0]];
  let distance = Array.from(Array(row + 1), () => Array(col).fill(0));

  while (queue.length) {
    let L = queue.shift();
    console.log(distance);

    dx.forEach((v, i) => {
      if (v === row && dy[i] === col) {
        answer = Math.max(answer, distance[L[0]][L[1]]);
      } else {
        if (
          L[0] + v >= 0 &&
          L[1] + dy[i] >= 0 &&
          L[0] + v < col &&
          L[1] + dy[i] < row &&
          maps[L[0] + v][L[1] + dy[i]] === 1
        ) {
          console.log(L[0], L[1]);
          maps[L[0]][L[1]] = 1; // 지나온길체크
          distance[L[0] + v][L[1] + dy[i]] = distance[L[0]][L[1]] + 1;
          maps[L[0]][L[1]] = 0; // 지나온길풀기
          queue.push([L[0] + v, L[1] + dy[i]]);
        }
      }
    });
  }

  return answer;
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
