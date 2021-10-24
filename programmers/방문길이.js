function movecheck(target, movement) {
  let copytarget = target.slice();
  function overcheck(T) {
    if (Math.abs(T[0]) > 5 || Math.abs(T[1]) > 5) {
      return false;
    } else return true;
  }
  let origin = copytarget.slice();
  switch (movement) {
    case "U": {
      copytarget[1]++;
      if (overcheck(copytarget)) {
        return copytarget;
      } else return origin;
    }
    case "D": {
      copytarget[1]--;
      if (overcheck(copytarget)) {
        return copytarget;
      } else return origin;
    }
    case "R": {
      copytarget[0]++;
      if (overcheck(copytarget)) {
        return copytarget;
      } else return origin;
    }
    case "L": {
      copytarget[0]--;
      if (overcheck(copytarget)) {
        return copytarget;
      } else return origin;
    }
  }
}

function exactcheck(arr, comparearr) {
  if (
    (arr[0] === arr[2] && arr[1] === arr[3]) ||
    (comparearr[0] === comparearr[2] && comparearr[1] === comparearr[3])
  ) {
    return true;
  }
  if (
    arr[0] === comparearr[2] &&
    arr[1] === comparearr[3] &&
    comparearr[0] === arr[2] &&
    comparearr[1] === arr[3]
  ) {
    return true;
  }
  if (
    arr[0] === comparearr[0] &&
    arr[1] === comparearr[1] &&
    arr[2] === comparearr[2] &&
    arr[3] === comparearr[3]
  ) {
    return true;
  } else return false;
}

function solution(dirs) {
  let operation = dirs.split(""); // 조작예정
  let move = [[0, 0]];
  let target = [0, 0];
  let rmoverlab = [];
  operation.forEach((v) => {
    let result = movecheck(target, v);
    target = result.slice();
    move.push(target);
  });
  move = move.map((v, i) => {
    if (move.length - 1 > i) {
      return [...v, ...move[i + 1]];
    }
  });
  rmoverlab.push(move.shift());
  move.pop();
  console.log(move);
  move.forEach((v) => {
    for (let i = 0; i < rmoverlab.length; i++) {
      if (exactcheck(rmoverlab[i], v)) {
        // 다 false가 나와야함
        break; // 같은거있으면 나와
      }
      if (i === rmoverlab.length - 1) {
        rmoverlab.push(v.slice()); // 결국 틀린거없으면 값 넣어주기
      }
    }
  });

  console.log(rmoverlab);
  return rmoverlab.length;
}

console.log(solution("UUUUDUDUDUUU"));
