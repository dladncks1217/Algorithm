var reverse = function (x) {
  if (x === 0) return 0;
  if (x > 0) {
    let result = parseInt(x.toString().split("").reverse().join(""));
    return result < Math.pow(2, 31) - 1 ? result : 0;
  } else {
    let result = x.toString().split("");
    result.push("-");
    result.shift();
    result = result.reverse();
    result = parseInt(result.join(""));
    return result > Math.pow(-2, 31) ? result : 0;
  }
};
