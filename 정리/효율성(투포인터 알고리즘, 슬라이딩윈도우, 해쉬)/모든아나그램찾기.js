function mapcheck(map1, map2) {
  for (let [key, value] of map2) {
    if (!map1.has(key) || map1.get(key) !== map2.get(key)) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let map1 = new Map();
  let map2 = new Map();
  let len1 = s.length;
  let len2 = t.length;
  for (let x of t) {
    if (map2.has(x)) map2.set(x, map2.get(x) + 1);
    else map2.set(x, 1);
  }
  for (let i = 0; i < len2; i++) {
    // 일단 3개
    if (map1.has(t[i])) map1.set(t[i], map1.get(t[i]));
    else map1.set(t[i], 1);
  }
  if (mapcheck(map1, map2)) answer++;
  for (let i = len2; i < len1; i++) {
    map1.set(s[i - len2], map1.get(s[i - len2]) - 1); // 하나줄이고
    if (map1.has(s[i])) map1.set(s[i], map1.get(s[i]) + 1);
    else map1.set(s[i], 1);
    if (mapcheck(map1, map2)) answer++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
