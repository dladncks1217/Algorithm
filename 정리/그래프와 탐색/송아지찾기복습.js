function solution(s, e) {
  let answer = 0;
  let check = Array.from({ length: 10001 }, () => 0);
  let distance = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  check[s] = 1;
  distance[s] = 0;
  while (queue.length > 0) {
    let L = queue.shift();

    for (let nx of [L + 1, L - 1, L + 5]) {
      if (nx === e) return distance[L] + 1;
      if (check[nx] === 0 && nx > 0 && nx < 10000) {
        check[nx] = 1;
        distance[nx] = distance[L] + 1;
        queue.push(nx);
      }
    }
  }
  console.log(distance);
  return answer;
}

console.log(solution(5, 14));
