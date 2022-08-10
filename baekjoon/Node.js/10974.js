const input = +require("fs").readFileSync("./dev/stdin").toString().trim();

let answer = [];
let check = Array.from({ length: input + 1 }, () => 0);

function DFS(L, temp) {
  if (L === input) {
    answer.push(temp.join(" "));
  } else {
    for (let i = 1; i <= input; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        temp.push(i);
        DFS(L + 1, temp);
        temp.pop();
        check[i] = 0;
      }
    }
  }
}

DFS(0, []);

console.log(answer.join("\n"));
