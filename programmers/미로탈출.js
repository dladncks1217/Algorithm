function generateNewMap(maps, y, x) {
  const newMap = maps.map((items) => {
    return items.split("").map(() => Infinity);
  });

  newMap[y][x] = 0;

  return newMap;
}

function solution(maps) {
  const problemStates = {
    L: Infinity,
    E: Infinity,
  };

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  const point = {
    S: [0, 0],
    L: [0, 0],
    E: [0, 0],
  };

  for (let y = 0; y < maps.length; y++) {
    for (let x = 0; x < maps[0].length; x++) {
      if (maps[y][x] === "S") point.S = [y, x];
      if (maps[y][x] === "L") point.L = [y, x];
      if (maps[y][x] === "E") point.E = [y, x];
    }
  }

  const leverMap = generateNewMap(maps, point.S[0], point.S[1]);

  const queue1 = [[point.S[0], point.S[1], 0]];

  while (queue1.length) {
    const [nowY, nowX, nowCount] = queue1.shift();

    for (let i = 0; i < 4; i++) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];

      if (nx >= 0 && ny >= 0 && ny < maps.length && nx < maps[0].length) {
        if (leverMap[ny][nx] > nowCount + 1 && maps[ny][nx] !== "X") {
          leverMap[ny][nx] = nowCount + 1;
          queue1.push([ny, nx, nowCount + 1]);
        }
      }
    }
  }

  problemStates.L = leverMap[point.L[0]][point.L[1]];
  if (problemStates.L === Infinity) return -1;

  const queue2 = [[point.L[0], point.L[1], 0]];
  const endMap = generateNewMap(maps, point.L[0], point.L[1]);

  while (queue2.length) {
    const [nowY, nowX, nowCount] = queue2.shift();

    for (let i = 0; i < 4; i++) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];

      if (nx >= 0 && ny >= 0 && ny < maps.length && nx < maps[0].length) {
        if (endMap[ny][nx] > nowCount + 1 && maps[ny][nx] !== "X") {
          endMap[ny][nx] = nowCount + 1;
          queue2.push([ny, nx, nowCount + 1]);
        }
      }
    }
  }

  problemStates.E = endMap[point.E[0]][point.E[1]];

  if (problemStates.E === Infinity) return -1;
  return problemStates.L + problemStates.E;
}

const answer = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"];
solution(answer);
