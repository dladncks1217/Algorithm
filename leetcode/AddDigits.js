// https://leetcode.com/problems/add-digits
let addDigits = function (num) {
  num = num.toString();
  num = num.split("");
  let sum = 0;
  while (num.length > 1) {
    sum = 0;
    num.forEach((v) => {
      sum += Number(v);
    });
    sum = sum.toString();
    num = sum.split("");
  }
  return num[0];
};

console.log(addDigits(38));
