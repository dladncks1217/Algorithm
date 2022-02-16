// https://www.acmicpc.net/problem/1991
function solution(nodes) {
  let tree = {};
  let 전위순회결과 = "";
  let 중위순회결과 = "";
  let 후위순회결과 = "";
  for (let [a, b, c] of nodes) {
    tree[a] = [b, c];
  }

  function 전위순회(node) {
    if (node === ".") return;
    전위순회결과 += node;
    전위순회(tree[node][0]);
    전위순회(tree[node][1]);
  }

  function 중위순회(node) {
    if (node === ".") return;
    중위순회(tree[node][0]);
    중위순회결과 += node;
    중위순회(tree[node][1]);
  }

  function 후위순회(node) {
    if (node === ".") return;
    후위순회(tree[node][0]);
    후위순회(tree[node][1]);
    후위순회결과 += node;
  }

  전위순회("A");
  console.log(전위순회결과);
  중위순회("A");
  console.log(중위순회결과);
  후위순회("A");
  console.log(후위순회결과);
}

console.log(
  solution([
    ["A", "B", "C"],
    ["B", "D", "."],
    ["C", "E", "F"],
    ["E", ".", "."],
    ["F", ".", "G"],
    ["D", ".", "."],
    ["G", ".", "."],
  ])
);

/* 프로그래머스 방식으로 변형하여 풀음 */
