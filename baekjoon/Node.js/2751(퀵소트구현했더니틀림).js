const [length, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (input.length < 2) console.log(input);
else {
  (function quickSort(array, left = 0, right = input.length - 1) {
    if (left >= right) {
      return;
    }

    const mid = Math.floor((left + right) / 2);
    const pivot = input[mid];
    const partition = divide(input, left, right, pivot);

    quickSort(array, left, partition - 1);
    quickSort(array, partition, right);

    function divide(array, left, right, pivot) {
      while (left <= right) {
        while (array[left] < pivot) {
          left++;
        }
        while (array[right] > pivot) {
          right--;
        }
        if (left <= right) {
          [array[left], array[right]] = [array[right], array[left]];
          left++;
          right--;
        }
      }
      return left;
    }
  })();
  console.log(input.join("\n"));
}
