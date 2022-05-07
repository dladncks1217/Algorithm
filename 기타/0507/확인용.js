function check(arr) {
  let temp = arr[0][0];

  // 윗줄
  for (let i = 1; i < arr[0].length; i++) {
    let newtemp = arr[0][i];
    arr[0][i] = temp;
    temp = newtemp;
  }

  for (let i = 1; i < arr.length; i++) {
    let newtemp = arr[i][arr.length - 1];
    arr[i][arr.length - 1] = temp;
    temp = newtemp;
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    let newtemp = arr[arr.length - 1][i];
    arr[arr.length - 1][i] = temp;
    temp = newtemp;
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    let newtemp = arr[i][0];
    arr[i][0] = temp;
    temp = newtemp;
  }

  return arr;
}

console.log(
  check([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
