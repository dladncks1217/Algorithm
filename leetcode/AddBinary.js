// https://leetcode.com/problems/add-binary/
let addBinary = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
