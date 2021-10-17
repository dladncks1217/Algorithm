function solution(str1, str2) {
  let alpabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let newstr1, newstr2;
  let intersection = []; // 교집합
  let union = []; // 합집합
  str1 = str1.toUpperCase().split(""); // 다 대문자로
  str2 = str2.toUpperCase().split("");

  str1 = str1.map((v, i) => {
    if (str1.length - 1 > i) {
      if (alpabets.indexOf(v) !== -1 && alpabets.indexOf(str1[i + 1]) !== -1) {
        return v + str1[i + 1];
      }
    } else return "";
  });

  str2 = str2.map((v, i) => {
    if (str2.length - 1 > i) {
      if (alpabets.indexOf(v) !== -1 && alpabets.indexOf(str2[i + 1]) !== -1) {
        return v + str2[i + 1];
      }
    } else return "";
  });

  if (str1[str1.length - 1] === "") {
    // 끝공백지우기
    str1.pop();
  }
  if (str2[str2.length - 1] === "") {
    str2.pop();
  }

  str1 = str1.filter((v) => v !== undefined);
  str2 = str2.filter((v) => v !== undefined);

  newstr1 = str1.map((v) => v);
  newstr2 = str2.map((v) => v);

  newstr1.forEach((v) => {
    if (str2.indexOf(v) !== -1) {
      // 교집합에 포함
      intersection.push(...str1.splice(str1.indexOf(v), 1));
      str2.splice(str2.indexOf(v), 1);
    } else {
      // 합집합에 포함
      console.log(v, str2.indexOf(v));
      union.push(...str1.splice(str1.indexOf(v), 1));
    }
  });
  newstr2.forEach((v) => {
    // 합집합 추가
    union.push(v);
  });

  if (union.length === 0) {
    return 65536;
  } else if (intersection.length === 0) {
    return 0;
  } else {
    return Math.floor(65536 * (intersection.length / union.length));
  }
}

console.log(solution("E=M*C^2", "e=m*c^2"));
