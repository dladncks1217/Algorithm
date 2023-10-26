const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

input.forEach((num, index) => {
  const set = new Set();
  let data = "INSOMNIA";

  for (let i = 1; i <= 100; i++) {
    data = num * i;

    String(data)
      .split("")
      .map(Number)
      .forEach((item) => {
        set.add(item);
      });
    if (set.size === 10) break;
  }
  if (data === 0) data = "INSOMNIA";
  console.log(`Case #${index + 1}: ${data}`);
});
