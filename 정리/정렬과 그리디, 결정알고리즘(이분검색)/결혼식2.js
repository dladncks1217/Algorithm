function solution(friends) {
  let answer = 0;
  let check = [];
  friends.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  for (let i = 0; i < 73; i++) {
    if (!friends.length) break;
    while (i === friends[0][0]) check.push(friends[0].shift());
    while (i > friends[0][1]) check.shift();
    answer = Math.max(answer, check.length);
  }
  return answer;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
