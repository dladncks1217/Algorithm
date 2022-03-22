let isHappy = function (n) {
  let answer = true;
  let check = [];
  n = n.toString();

  function recursive(num) {
    if (check.indexOf(Number(num)) !== -1) {
      return (answer = false);
    }
    check.push(Number(num));
    if (num === "1") {
      return;
    }
    let sum = 0;
    num = num.split("");

    num.forEach((v) => {
      let num = Number(v);
      sum += num * num;
    });

    recursive(sum.toString());
  }
  recursive(n);
  return answer;
};

console.log(isHappy(7));
