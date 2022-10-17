const [[T], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });
const answer = [];
const sosu = Array.from({ length: 10000 }, () => true).fill(false, 0, 2);

for (let i = 2; i * i <= 10000; i++) {
  if (sosu[i]) {
    for (let k = i * i; k <= 10000; k += i) {
      sosu[k] = false;
    }
  }
}

input.forEach((v) => {
  const [num1, num2] = v;
  if (sosu[num1] === true && sosu[num2] === true) {
    BFS(num1, num2);
  } else {
    answer.push(0);
  }
});

function BFS(num1, target) {
  const visited = Array.from({ length: 10000 }, () => 0);
  visited[num1] = 1;
  const queue = [[num1, 0]];
  while (queue.length) {
    const [curr, cost] = queue.shift();
    if (curr === target) {
      answer.push(cost);
      return;
    }
    // 4번째자리
    for (let i = 1; i < 10; i++) {
      if (Math.floor(curr / 1000) === i) continue;
      else {
        let check = (curr % 1000) + i * 1000;
        if (sosu[check] === true && visited[check] === 0) {
          visited[check] = 1;
          queue.push([check, cost + 1]);
        }
      }
    }

    // 3번째자리
    for (let i = 0; i < 10; i++) {
      if ((curr % 1000) - (curr % 100) === i * 100) continue;
      else {
        let check = Math.floor(curr / 1000) * 1000 + i * 100 + (curr % 100);
        if (sosu[check] === true && visited[check] === 0) {
          visited[check] = 1;
          queue.push([check, cost + 1]);
        }
      }
    }

    // 2번째자리
    for (let i = 0; i < 10; i++) {
      if ((curr % 100) - (curr % 10) === i * 10) continue;
      else {
        let check = Math.floor(curr / 100) * 100 + i * 10 + (curr % 10);
        if (sosu[check] === true && visited[check] === 0) {
          visited[check] = 1;
          queue.push([check, cost + 1]);
        }
      }
    }

    // 1번째자리
    for (let i = 0; i < 10; i++) {
      if (curr % 10 === i) continue;
      else {
        let check = Math.floor(curr / 10) * 10 + i;

        if (sosu[check] === true && visited[check] === 0) {
          visited[check] = 1;
          queue.push([check, cost + 1]);
        }
      }
    }
  }
}

console.log(answer.join("\n"));
