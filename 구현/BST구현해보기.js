function BST() {
  this.count = 0;
  this.root = null;

  arguments.callee.prototype.add = (data) => {
    let newNode = new Node(data);
    if (this.count === 0) this.root = newNode;
    else insertNode(newNode, this.root);
    this.count++;
    return this.count;
  };

  arguments.callee.prototype.remove = (data) => {
    let node = removeNode(data, this.root);
    if (node) {
      this.root = node;
      this.count--;
    }
  };
}

function Node(data) {
  this.data = data;
  this.left;
  this.right;
}

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

function removeNode(data, root) {
  if (!root) return null;
  if (data < root.data) {
    root.left = removeNode(data, root.left);
  } else if (data > root.data) {
    root.right = removeNode(data, root.right);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      let changeData = findSmallestLeft(root.left); // 왼쪽에서 가장 큰 값이랑 바꿀 예정

      [root.data, changeData.data] = [changeData.data, root.data];
      root.left = removeNode(changeData.data, root.left);
    }
  }
  return root;
}
// 왼쪽에서 가장 큰 값이랑 바꾸기 함수
function findSmallestLeft(node) {
  let result = node;
  while (!result) {
    result = node.right;
  }
  return result;
}

// function

let newTree = new BST();
// newTree.add(5); // 1
// newTree.add(3); // 2
// newTree.add(4); // 3
// newTree.add(2); // 4
// newTree.add(7); // 5
// newTree.add(6); // 6
// console.log(newTree.root.left.data);
// console.log(newTree.root.left.left.data);
// console.log(newTree.root.left.right.data);
// console.log(newTree);
// console.log(newTree.remove(3));

// console.log(newTree.root.left.right);
// console.log(newTree);
newTree.add(6);
newTree.add(4);
newTree.add(9);
newTree.add(3);
newTree.add(5);
newTree.add(1);
newTree.add(2);
newTree.add(8);
newTree.add(7);
console.log(newTree);
console.log(newTree.root.right);
newTree.remove(4);
console.log(newTree);
console.log(newTree.root.left);
