let plusOne = function (digits) {
  digits = digits.join("");
  digits = BigInt(digits);
  digits++;
  digits = digits.toString().split("");
  digits = digits.map((v) => Number(v));
  return digits;
};
