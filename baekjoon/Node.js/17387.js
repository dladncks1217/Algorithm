const [one, two] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const [ax, ay, bx, by] = one;
const [cx, cy, dx, dy] = two;

function CCW(x1, y1, x2, y2, x3, y3) {
  const ccw = x1 * y2 + x2 * y3 + x3 * y1 - (x2 * y1 + x3 * y2 + x1 * y3);
  if (ccw < 0) {
    return -1;
  } else if (ccw > 0) {
    return 1;
  } else {
    return 0;
  }
}

let result1 = CCW(ax, ay, bx, by, cx, cy);
let result2 = CCW(ax, ay, bx, by, dx, dy);
let result3 = CCW(cx, cy, dx, dy, ax, ay);
let result4 = CCW(cx, cy, dx, dy, bx, by);

if (result1 * result2 == 0 && result3 * result4 == 0) {
  if (
    Math.min(ax, bx) <= Math.max(cx, dx) &&
    Math.min(cx, dx) <= Math.max(ax, bx) &&
    Math.min(ay, by) <= Math.max(cy, dy) &&
    Math.min(cy, dy) <= Math.max(ay, by)
  ) {
    console.log(1);
  } else {
    console.log(0);
  }
} else if (result1 * result2 <= 0 && result3 * result4 <= 0) {
  console.log(1);
} else {
  console.log(0);
}
