function check(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i < arr.length - 2) {
  //       [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  //     }
  //   }
  arr.unshift(arr.pop());
  console.log(arr);
}

console.log(
  check([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
