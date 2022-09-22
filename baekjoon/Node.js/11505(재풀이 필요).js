const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);
const nums = input.slice(1, N + 1).map(BigInt);
const transactions = input.slice(N + 1, N + 1 + M + K);
const MOD = 1000000007n;

class MultSegTree {
  constructor(nums) {
    this.nums = nums;
    this.data = new Array(this.nums.length * 4).fill(1n);
    this.init(0, this.nums.length - 1);
  }

  init(start, end, idx = 1) {
    if (start === end) {
      this.data[idx] = this.nums[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      this.data[idx] = this.operation(
        this.init(start, mid, idx * 2),
        this.init(mid + 1, end, idx * 2 + 1)
      );
    }
    return this.data[idx];
  }

  operation(a, b) {
    return (a * b) % MOD;
  }

  _interval(start, end, idx, left, right) {
    if (right < start || end < left) return BigInt(1);
    if (left <= start && end <= right) return this.data[idx];
    const mid = Math.floor((start + end) / 2);
    return this.operation(
      this._interval(start, mid, idx * 2, left, right),
      this._interval(mid + 1, end, idx * 2 + 1, left, right)
    );
  }

  interval(left, right) {
    return this._interval(0, this.nums.length - 1, 1, left, right);
  }

  _update(start, end, idx, what, value) {
    if (what < start || end < what) return this.data[idx];
    if (start === end) return (this.data[idx] = value);
    const mid = Math.floor((start + end) / 2);
    return (this.data[idx] = this.operation(
      this._update(start, mid, idx * 2, what, value),
      this._update(mid + 1, end, idx * 2 + 1, what, value)
    ));
  }

  update(what, value) {
    this._update(0, this.nums.length - 1, 1, what, value);
  }
}

const seg = new MultSegTree(nums);
const results = [];
for (const transaction of transactions) {
  const [a, b, c] = transaction.split(" ");
  if (a === "1") {
    seg.update(b - 1, BigInt(c));
  } else {
    results.push(seg.interval(b - 1, c - 1));
  }
}
console.log(results.join("\n"));
