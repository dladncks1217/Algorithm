let firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (palindromeCheck(words[i]) === true) {
      return words[i];
    }
  }
  return "";
};

function palindromeCheck(str) {
  str = str.split("");
  while (str.length > 1) {
    if (str[0] === str[str.length - 1]) {
      str.pop();
      str.shift();
    } else {
      return false;
    }
  }
  return true;
}

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
