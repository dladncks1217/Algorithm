function solution(str1, str2) {
  let answer = "YES";
  let map1 = new Map();
  for (let s of str1) {
    if (map1.has(s)) map1.set(s, map1.get(s) + 1);
    else map1.set(s, 1);
  }
  for (let s of str2) {
    if (!map1.has(s) || map1.get(s) === 0) return "NO";
    map1.set(s, map1.get(s) - 1);
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
