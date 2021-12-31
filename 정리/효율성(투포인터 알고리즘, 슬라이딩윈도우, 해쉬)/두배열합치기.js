function solution(arr1, arr2) {
  let answer = [];
  let arr1len = arr1.length;
  let arr2len = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < arr1len && p2 < arr2len) {
    arr1[p1] <= arr2[p2] ? answer.push(arr1[p1++]) : answer.push(arr2[p2++]);
  }
  while (p1 < arr1len) answer.push(arr1[p1++]);
  while (p2 < arr2len) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
