// 21윈터
function solution(character, monsters) {
  let answer = "";
  character = character.split(" ");
  console.log(character);
  let monsterArr = [];
  let monsterTime = Array.from({ length: monsters.length }, () => -1);
  monsters.forEach((v, i) => {
    // 몬스터들 정리
    monsterArr.push([]);
    monsterArr[i].push(...v.split(" "));
  });

  console.log(monsterArr);

  for (let i = 0; i < monsterArr.length; i++) {
    // 체력, 공격력
    let time = 0;
    let aboutPlayer = [
      Number(character[0]),
      Number(character[1]) - Number(monsterArr[i][4]),
    ];
    let aboutMonster = [
      Number(monsterArr[i][2]),
      Number(monsterArr[i][3]) - Number(character[2]),
    ];
    let isSuccess = false;

    while (!isSuccess) {
      let firstHP = aboutPlayer[0] - 0;
      if (aboutPlayer[1] === 0 && aboutMonster[1] === 0) {
        //전투가 안끝나는경우
        break;
      }

      aboutMonster[0] -= aboutPlayer[1]; // 공격 후 몬스터체력
      if (aboutMonster[0] <= 0) {
        time++;
        isSuccess = true;
        break;
      }
      aboutPlayer[0] -= aboutMonster[1]; // 공격 후 플레이어 체력
      if (aboutPlayer[0] > 0) {
        aboutPlayer[0] = firstHP;
      } else {
        break;
      }
      time++; // 시간 추가
    }
    console.log(isSuccess);
    if (isSuccess) monsterTime[i] = time;
    isSuccess = false;
  }
  monsterTime = monsterTime.map((v, i) => monsterArr[i][1] / v);
  console.log(monsterTime);
  let monsterCheck = monsterTime.indexOf(Math.max(...monsterTime));
  answer = monsterArr[monsterCheck][0];
  return answer;
}

console.log(
  solution("10 5 2", [
    "Knight 3 10 10 3",
    "Wizard 5 10 15 1",
    "Beginner 1 1 15 1",
  ])
);
