const merge = (left, right) => {
  const result = [];
  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }

  if (left.length === 0) result.push(...right);
  if (right.length === 0) result.push(...left);
  console.log(result);
  return result;
};

const mergeSort = (arr) => {
  //   console.log(arr);
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const arr = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
console.log(mergeSort(arr));
