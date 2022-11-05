const move = {
  1: {
    dx: [-1, 0, 0, -1, 0, 0, 0, 0, 0],
    dy: [1, 1, 0, 0, 0, 0, 0, 0, 0],
  },
  2: {
    dx: [-1, 0, 1, 0, 0, 0, 0, 0, 0],
    dy: [1, 1, 1, 0, 0, 0, 0, 0, 0],
  },
  3: {
    dx: [0, 0, 1, 0, 0, 1, 0, 0, 0],
    dy: [0, 1, 1, 0, 0, 0, 0, 0, 0],
  },
  4: {
    dx: [-1, 0, 0, -1, 0, 0, -1, 0, 0],
    dy: [1, 0, 0, 0, 0, 0, -1, 0, 0],
  },
  5: {
    dx: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    dy: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  6: {
    dx: [0, 0, 1, 0, 0, 1, 0, 0, 1],
    dy: [0, 0, 1, 0, 0, 0, 0, 0, -1],
  },
  7: {
    dx: [0, 0, 0, -1, 0, 0, -1, 0, 0],
    dy: [0, 0, 0, 0, 0, 0, -1, -1, 0],
  },
  8: {
    dx: [0, 0, 0, 0, 0, 0, -1, 0, 1],
    dy: [0, 0, 0, 0, 0, 0, -1, -1, -1],
  },
  9: {
    dx: [0, 0, 0, 0, 0, 1, 0, 0, 1],
    dy: [0, 0, 0, 0, 0, 0, 0, -1, -1],
  },
};

function solution(worldmap) {
  const WIDTH = worldmap[0].length;
  const HEIGHT = worldmap.length;
  // 거리계산용 그래프 생성
  const visited = worldmap.map((v) => {
    v = v.split("").map((k) => Infinity);
    return v;
  });
  visited[0][0] = 0;
  // 월드맵 생성
  worldmap = worldmap.map((v) => {
    v = v.split("");
    return v;
  });

  // 6번방향 보는중
  const queue = [[0, 0, 6]];

  while (queue.length) {
    const [x, y, direction] = queue.shift();

    for (let i = 0; i < 9; i++) {
      if (i === 5) continue;

      const nx = x + move[direction].dx[i];
      const ny = y + move[direction].dy[i];

      if (i === 1 || i === 3 || i === 7 || i === 9) {
        i;
        if (
          i === 1 &&
          x - 1 >= 0 &&
          y + 1 < HEIGHT &&
          (worldmap[y][x - 1] === "X" || worldmap[y + 1][x] === "X")
        ) {
          continue;
        } else if (
          i === 3 &&
          x + 1 < WIDTH &&
          y + 1 < HEIGHT &&
          (worldmap[y][x + 1] === "X" || worldmap[y + 1][x] === "X")
        ) {
          continue;
        } else if (
          i === 7 &&
          x - 1 >= 0 &&
          y - 1 >= 0 &&
          (worldmap[y][x - 1] === "X" || worldmap[y - 1][x] === "X")
        ) {
          continue;
        } else if (
          i === 9 &&
          x + 1 < WIDTH &&
          y + 1 < HEIGHT &&
          (worldmap[y + 1][x] === "X" || worldmap[y][x + 1] === "X")
        ) {
          continue;
        }
      }

      if (nx >= 0 && ny >= 0 && nx < WIDTH && ny < HEIGHT) {
        if (worldmap[ny][nx] === "." && visited[ny][nx] > visited[y][x] + 1) {
          visited[ny][nx] = visited[y][x] + 1;
          queue.push([nx, ny, i + 1]);
        }
      }
    }
  }
  console.log(visited);
  return visited[HEIGHT - 1][WIDTH - 1];
}

console.log(solution(["..XXX", "..XXX", "...XX", "X....", "XXX.."]));
