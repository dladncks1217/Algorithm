var isPalindrome = function (x) {
  let str = x.toString();
  let first = 0,
    last = str.length - 1;

  while (first < last) {
    if (str[first] !== str[last]) return false;
    first++;
    last--;
  }
  return true;
};
console.log(isPalindrome(1000030001));
