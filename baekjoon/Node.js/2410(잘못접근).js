const input = +require("fs").readFileSync("./dev/stdin").toString();

let dy = Array.from({ length: input + 1 }, () => 0);
dy[0] = 1;

const myeoksoo = [];

for (let i = 1; i <= input; i *= 2) {
  myeoksoo.push(i);
}

for (let i = 0; i < myeoksoo.length; i++) {
  const state = dy.slice();

  for (let k = myeoksoo[i]; k < state.length; k++) {
    if (state[k] > dy[k - myeoksoo[i]]) state[k] = dy[k - myeoksoo[i]] + 1;
    else state[k] = dy[k - myeoksoo[i]];
  }
  dy = state.slice();
  console.log(myeoksoo[i]);
  console.log(dy);
}
