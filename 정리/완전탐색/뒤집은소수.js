function solution(arr) {
  let answer;
  let sosucheck;
  let newarr = arr.slice();
  newarr = newarr.map((v) => {
    let result = Number(v.toString().split("").reverse().join(""));
    return result;
  });
  sosucheck = Array.from({ length: Math.max(...newarr) + 1 }, () => true);
  sosucheck.splice(0, 2, false, false);
  let maxnum = sosucheck.length - 1;
  for (let i = 2; i * i <= maxnum; i++) {
    if (sosucheck[i] === true) {
      if (sosucheck[i]) {
        for (let j = i * i; j <= maxnum; j += i) {
          sosucheck[j] = false;
        }
      }
    }
  }
  newarr = newarr.filter((v) => (sosucheck[v] !== true ? "" : v));

  return newarr;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
