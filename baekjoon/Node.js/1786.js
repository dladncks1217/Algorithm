let [string, pattern] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

const answer = [];

const table = Array.from({ length: string.length }, () => 0);

function makeTable(str) {
  let left = 0;
  for (let right = 1; right < str.length; right++) {
    // left가 0이상인데 right번째 문자와 left번째 문자가 일치하지 않는다면
    while (left > 0 && str[right] !== str[left]) {
      // left에서 1을 뺀 인덱스의 테이블 값으로 left값을 변경해주면 됨.
      left = table[left - 1];
    }

    // 만약 left와 right 번째 문자열이 일치하다면
    if (str[right] === str[left]) {
      // 현재 left 위치에 1을 더한 값이 right번째 값의 인덱스로 들어가야 한다.
      table[right] = ++left;
    }
  }
}
makeTable(pattern);

function KMP(parent, pattern) {
  let left = 0;
  for (let right = 0; right < parent.length; right++) {
    // 두 값이 일치하지 않을 때
    while (left > 0 && parent[right] !== pattern[left]) {
      left = table[left - 1];
    }
    // 문자가 하나 일치한경우
    if (parent[right] === pattern[left]) {
      ++left;
    }
    // 문자가 전체 일치한경우
    if (pattern.length <= left) {
      answer.push(right - left + 2);
      left = table[left - 1];
    }
  }
}

KMP(string, pattern);

console.log(answer.length);
console.log(answer.join("\n"));
