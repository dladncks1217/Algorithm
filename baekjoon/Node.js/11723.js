// node 지원안함 파이썬으로 재풀이
let input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

input.shift();
const allResult = {
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
  10: true,
  11: true,
  12: true,
  13: true,
  14: true,
  15: true,
  16: true,
  17: true,
  18: true,
  19: true,
  20: true,
};
let S = {};

input = input.map((v) => {
  v = v.split(" ");
  return v;
});

input.forEach((v) => {
  [cal, num] = v;
  switch (cal) {
    case "add": {
      S[num] = true;
      break;
    }
    case "remove": {
      delete S[num];
      break;
    }
    case "check": {
      S.hasOwnProperty(num) ? console.log(1) : console.log(0);
      break;
    }
    case "toggle": {
      if (S.hasOwnProperty(num)) {
        delete S[num];
      } else {
        S[num] = true;
      }
      break;
    }
    case "all": {
      S = Object.assign({}, allResult);
      break;
    }
    case "empty": {
      S = {};
      break;
    }
  }
});
