let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => parseInt(v));

input.shift();

// const heap = { min: Number.MAX_SAFE_INTEGER };
const heap = [];

input.forEach((v) => {
  if (v === 0) {
    if (heap.length) {
      let smallest = Math.min(...heap);
      let sIndex = heap.indexOf(smallest);
      console.log(heap[sIndex]);
      heap.splice(sIndex, 1);
    } else {
      console.log(0);
    }
  } else {
    heap.push(v);
  }
});
