const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 노드
function Node(data) {
  this.data = data;
  this.left;
  this.right;
}

// bst 구현
function BST() {
  this.count = 0;
  this.root = null;

  // 노드 추가
  arguments.callee.prototype.add = (data) => {
    let newNode = new Node(data);
    if (this.count === 0) this.root = newNode;
    else insertNode(newNode, this.root);
    this.count++;
    return this.count;
  };
}

// 노드 추가에 써먹을 함수
function insertNode(node, root) {
  if (!root) return node;
  if (node.data < root.data) {
    root.left = insertNode(node, root.left);
    return root;
  } else if (node.data >= root.data) {
    root.right = insertNode(node, root.right);
    return root;
  }
}

// 트리 생성
let newTree = new BST();

input.forEach((v) => {
  newTree.add(+v);
});

// 후위순회 함수
function backTraversal(now) {
  if (now.left) {
    backTraversal(now.left);
  }
  if (now.right) {
    backTraversal(now.right);
  }
  console.log(now.data);
}

backTraversal(newTree.root);
