function changebit(bit) {
  bit = bit.split("");
  bit.unshift("0");
  for (let i = bit.length - 1; i >= 0; i--) {
    if (bit[bit.length - 1] === "0") {
      bit[i] = "1";
      break;
    } else {
      if (bit[i] === "0") {
        bit[i] = "1";
        bit[i + 1] = "0";
        break;
      }
    }
  }
  bit = bit.join("");
  return parseInt(bit, 2);
}

function solution(numbers) {
  let answer = [];
  numbers.forEach((v) => {
    const binary = v.toString(2);
    answer.push(changebit(binary));
  });

  return answer;
}

console.log(solution([2, 7]));
