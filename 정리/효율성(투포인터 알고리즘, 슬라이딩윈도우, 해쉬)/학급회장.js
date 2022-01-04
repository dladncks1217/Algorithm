function solution(s) {
  s = s.split("");
  let answer;
  let map = new Map();
  let map2;
  s.forEach((v) => {
    if (map.get(v) === undefined) {
      map.set(v, 1);
    } else {
      map.set(v, map.get(v) + 1);
    }
  });
  map2 = [
    ...new Map(
      [...map.entries()].sort((a, b) => {
        return b[1] - a[1];
      })
    ),
  ];
  return map2[0][0];
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
