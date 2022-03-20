let addOperators = function (num, target) {
  let answer = [];

  function DFS(str, sum, prev, temp) {
    if (!str.length) {
      if (sum === target) {
        answer.push(temp.join(""));
      }
    } else {
      let length = str.length;
      if (str[0] === "0") length = 1;

      for (let i = 1; i <= length; i++) {
        const curr = Number(str.slice(0, i));
        const rest = str.slice(i);

        if (!temp.length) DFS(rest, curr, curr, [curr]);
        else {
          DFS(rest, sum + curr, curr, [...temp, "+", curr]);

          DFS(rest, sum - curr, curr, [...temp, "-", curr]);

          DFS(rest, sum - prev + prev * curr, prev * curr, [
            ...temp,
            "*",
            curr,
          ]);
        }
      }
    }
  }

  DFS(num, 0, 0, []);
  return answer;
};

console.log(addOperators("3456237490", 9191));
