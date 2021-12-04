function solution(drum) {
  let answer = 0;
  drum = drum.map((v) => {
    return v.split("");
  });
  const width = drum[0].length;
  const height = drum.length;
  //가로줄 확인
  for (let i = 0; i < width; i++) {
    let nowlocate = [0, i];
    let nowheight = 0, // 현재 높이
      starmet = false, //별 한번 만났으면 true, true시 멈추기
      stopped = false;
    while (stopped === false && nowheight <= height) {
      if (nowlocate[0] >= height) {
        answer++;
        break;
      }
      switch (drum[nowlocate[0]][nowlocate[1]]) {
        case "#": {
          nowlocate[0] += 1;
          break;
        }
        case "*": {
          if (starmet === false) {
            nowlocate[0] += 1;
            starmet = true;
          } else {
            stopped = true;
          }
          break;
        }
        case ">": {
          nowlocate[1] += 1;
          break;
        }
        case "<": {
          nowlocate[1] -= 1;
          break;
        }
        default:
          break;
      }
    }
  }
  return answer;
}

console.log(
  solution(["######", ">#*###", "####*#", "#<#>>#", ">#*#*<", "######"], 4)
);
