let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((v) => +v);
    return v;
  });

let answer = 0;

const [lands, finds, road] = input.shift();

const items = input.shift(); // 아이템들 배열

items.unshift(0);

let graph = Array.from({ length: lands + 1 }, () => []);
let check = Array.from({ length: lands + 1 }, () => 0);

for ([a, b, dist] of input) {
  graph[a].push([b, dist]);
  graph[b].push([a, dist]);
}

// 탐색
for (let i = 1; i <= lands; i++) {
  let stamina = finds; // 찾을 수 있는 범위
  let item = items[i]; // 초기 아이템
  let prevNode = [0, 0];
  let biggest = items[i];
  const check = Array.from({ length: lands + 1 }, () => 0); // 체크배열 초기화
  const queue = [];
  queue.push(...graph[i]);

  while (queue.length) {
    let [destination, health] = queue.shift(); // 목적지, 탐색 가능한지
    for (let i = 0; i < graph[destination].length; i++) {
      //   if (stamina - health >= 0 && item + items[destination]) {
      //     prevNode = [destination, items[destination]];
      //     stamina -= health;
      //     item += items[destination];
      //     queue.push(...graph[destination]);
      //   } else {
      //     prevNode = [0, 0];
      //   }
    }
  }
  answer = Math.max(answer, biggest);
}

console.log(answer);
