function solution(dist) {
  let answer = [];
  let temp = [];

  let startpoint = [0, 0, 0]; // 거리, 시작점, 좌표
  // 갔던데 또 못찍게 제일큰수로 바꿔버림
  dist = dist.map((v, i) => {
    let max = Math.max(...v);
    if (max > startpoint[0]) {
      let change = v.indexOf(max);
      startpoint[0] = max;
      startpoint[1] = i;
      startpoint[2] = change;
    }
    v[v.indexOf(0)] = Number.MAX_SAFE_INTEGER;
    return v;
  });
  console.log(startpoint);

  // 시작점 알았으면 돌면서 제일작은애들로만 값 넣으면 됨.
  let searchpoint = startpoint[1];
  temp.push(searchpoint);

  dist[startpoint[2]] = Array.from(
    { length: dist.length },
    () => Number.MAX_SAFE_INTEGER
  );

  for (let i = 0; i < dist.length; i++) {
    dist[i][startpoint[2]] = Number.MAX_SAFE_INTEGER;
  }
  for (let i = 0; i < dist.length - 1; i++) {
    let smallest = Math.min(...dist[searchpoint]);
    console.log(dist[searchpoint]);
    let change = dist[searchpoint].indexOf(smallest);
    temp.push(change);
    dist[change] = Array.from(
      { length: dist.length },
      () => Number.MAX_SAFE_INTEGER
    );
    for (let i = 0; i < dist.length; i++) {
      dist[i][change] = Number.MAX_SAFE_INTEGER;
    }
    searchpoint = change;
  }

  console.log(temp);
  answer.push(temp.slice());
  temp.reverse();
  answer.push(temp);
  return answer;
}

console.log(
  solution([
    [0, 2, 3, 1],
    [2, 0, 1, 1],
    [3, 1, 0, 2],
    [1, 1, 2, 0],
  ])
);
