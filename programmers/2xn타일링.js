function solution(n) {
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i < dy.length; i++) {
    dy[i] = (dy[i - 1] + dy[i - 2]) % 1000000007;
  }

  return dy[dy.length - 1];
}

console.log(solution(4));
