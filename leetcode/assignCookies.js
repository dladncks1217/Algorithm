let findContentChildren = function (g, s) {
  let answer = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let cookie = 0;
  for (let i = 0; i < g.length; i++) {
    cookie = 0;
    while (g[i] > s[cookie]) cookie++;
    if (g[i] <= s[cookie]) answer++;
    s[cookie] = Number.MIN_SAFE_INTEGER;
  }

  return answer;
};

console.log(findContentChildren([1, 2, 3], [3]));
