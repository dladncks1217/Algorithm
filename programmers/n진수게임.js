function solution(n, t, m, p) {
  let string = [];
  let order = 1;
  for (let i = 0; i < t * m; i++) {
    string.push(...i.toString(n).toUpperCase());
  }
  string = string.filter((v) => {
    if (order === p) {
      if (order + 1 <= m) {
        order++;
        return v;
      } else {
        order = 1;
        return v;
      }
    }
    if (order + 1 <= m) {
      order++;
    } else {
      order = 1;
    }
  });
  return string.join("").substring(0, t);
}

console.log(solution(2, 4, 2, 1));
