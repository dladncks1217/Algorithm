function solution(maps) {
  let row = maps.length;
  let col = maps[0].length;
  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];
  let queue = [[0, 0]];
  let distance = Array.from(Array(row), () => Array(col).fill(1));

  while (queue.length) {
    const [y, x] = queue.shift();

    dx.forEach((v, i) => {
      const newx = x + v;
      const newy = y + dy[i];
      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < col &&
        newy < row &&
        maps[newy][newx] === 1 &&
        distance[newy][newx] === 1
      ) {
        distance[newy][newx] = distance[y][x] + 1;
        queue.push([newy, newx]);
      }
    });
  }
  return distance[row - 1][col - 1] === 1 ? -1 : distance[row - 1][col - 1];
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
