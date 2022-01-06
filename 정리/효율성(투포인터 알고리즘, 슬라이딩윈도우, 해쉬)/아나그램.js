function solution(str1, str2) {
  let answer = "YES";
  let map1 = new Map();
  let map2 = new Map();
  for (let s of str1) {
    if (map1.get(s)) map1.set(s, map1.get(s) + 1);
    else map1.set(s, 0);
  }
  for (let s of str2) {
    if (map2.get(s)) map2.set(s, map2.get(s) + 1);
    else map2.set(s, 0);
  }
  for (let [key, value] of map1) {
    if (!(map2.get(key) === value)) answer = "NO";
  }
  return answer;
}

let a = "AbaAeCs";
let b = "baeeACA";
console.log(solution(a, b));
