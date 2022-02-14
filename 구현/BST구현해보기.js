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

  arguments.callee.prototype.search = (data) => {
    return searchNode(data, this.root);
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

function searchNode(data, node) {
  if (data < node.data) {
    return searchNode(data, node.left);
  } else if (data > node.data) {
    return searchNode(data, node.right);
  } else return node;
}

function removeNode(data, root) {
  if (!root) return null;
  if (data < root.data) {
    root.left = removeNode(data, root.left);
  } else if (data > root.data) {
    root.right = removeNode(data, root.right);
  } else {
    if (!root.left && !root.right) {
      return;
    } else if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      let changeData = root.left;
      while (changeData.right) changeData = changeData.right;
      [root.data, changeData.data] = [changeData.data, root.data];
      root.left = removeNode(changeData.data, root.left);
    }
  }
  return root;
}

let newTree = new BST();

newTree.add(6);
newTree.add(4);
newTree.add(9);
newTree.add(2);
newTree.add(5);
newTree.add(1);
newTree.add(3);
newTree.add(8);
newTree.add(7);
// newTree.add(8);
// newTree.add(3);
// newTree.add(10);
// newTree.add(1);
// newTree.add(6);
// newTree.add(14);
// newTree.add(4);
// newTree.add(7);
// newTree.add(13);
console.log(newTree);
// console.log(newTree.root.right);
// newTree.remove(6);
// console.log(newTree);
// console.log(newTree.search(3));
