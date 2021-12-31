function solution(arr1, arr2) {
  let answer = [];
  let arr1len = arr1.length;
  let arr2len = arr2.length;
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1len && p2 < arr2len) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else {
      arr1[p1] < arr2[p2] ? p1++ : p2++;
    }
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
