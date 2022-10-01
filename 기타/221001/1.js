function isCorrect(S, N) {
  // 3글자 이상인지
  if (S.length < 3) return false;

  // 소문자확인
  for (let i = 0; i < S.length; i++) {
    if (S[i] === S[i].toUpperCase) return false;
  }

  // S+N형식 확인
  for (let i = 0; i < S.length; i++) {
    if (!isNaN(+S[i])) return false;
  }
  for (let i = 0; i < N.length; i++) {
    if (isNaN(+N[i])) return false;
  }

  // n첫자리 확인
  if (N.length > 0 && N[0] === 0) return false;
  // s길이확인
  if (S.length > 6) return false;
  // n길이확인
  if (N.length > 6) return false;
  return true;
}

function splitID(str) {
  let Scheck = false;
  let Ncheck = false;
  str = str.split("");
  const stemp = [];
  const ntemp = [];
  for (let i = 0; i < str.length; i++) {
    if (Scheck === false && isNaN(+str[i])) {
      stemp.push(str[i]);
      Scheck = true;
    } else if (Scheck === true && isNaN(+str[i])) stemp.push(str[i]);

    if (Scheck === true && Ncheck === false && !isNaN(+str[i])) {
      ntemp.push(str[i]);
      Ncheck = true;
    } else if (Scheck === true && Ncheck === true && !isNaN(+str[i]))
      ntemp.push(str[i]);
  }

  return [stemp.join(""), ntemp.join("")];
}

function solution(registered_list, new_id) {
  let answer = "";
  // 가입 안되어있는경우
  if (registered_list.indexOf(new_id) === -1) {
    const [S, N] = splitID(new_id);

    if (isCorrect(S, N)) answer = S + N;
    else {
      while (registered_list.indexOf(new_id) !== -1) {
        N = +N + 1;
        new_id = S + N;
        // console.log(new_id);
      }
      answer = new_id;
    }
  } else {
    // 가입되어있는경우
    let [S, N] = splitID(new_id);

    if (isCorrect(S, N)) {
      while (registered_list.indexOf(new_id) !== -1) {
        N = +N + 1;
        new_id = S + N;
        // console.log(new_id);
      }
      answer = new_id;
    }
  }
  console.log(splitID(new_id));
  return answer;
}

console.log(solution(["apple1", "orange", "banana3"], "apple"));
