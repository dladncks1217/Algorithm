const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const leftSort = quickSort(left);
  const rightSort = quickSort(right);
  return [...leftSort, pivot, ...rightSort];
};

const arr = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
console.log(quickSort(arr));
