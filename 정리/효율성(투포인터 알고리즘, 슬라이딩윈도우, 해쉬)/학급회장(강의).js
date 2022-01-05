function solution(s) {
  let answer;
  let map = new Map();
  for (let x of s) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 0);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of map) {
    if (max > val) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
