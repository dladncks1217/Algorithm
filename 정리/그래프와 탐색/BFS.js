function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);

  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nextV of [v * 2, v * 2 + 1]) {
      if (nextV > 7) continue;
      queue.push(nextV);
    }
  }

  return answer;
}

console.log(solution());
