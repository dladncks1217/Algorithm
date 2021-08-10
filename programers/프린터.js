function solution(priorities, location) {
    let answer = 0;
    let prioritiesindex = []; // priorities의 요청 순서
    for(let i = 0;i<priorities.length;i++){
        prioritiesindex.push(i);
    } // 요청 순서들 다 넣어주기
    let max = Math.max.apply(null,priorities); // 제일 큰 값 먼저 일단 찾음
    while(priorities.length!==0){
       if(priorities[0]===max && prioritiesindex[0]===location){ // 중요도 높은 값과 location 위치의 값이 일치할경우
            answer++;
            return answer;
       }else if(priorities[0]===max && prioritiesindex[0]!==location){ // 중요도 높은 값만 만났을 경우
           answer++;
           priorities.shift();
           prioritiesindex.shift();
           max = Math.max.apply(null,priorities);
       }else{ // 중요도 높은 값이 아닐경우
           priorities.push(priorities.shift());
           prioritiesindex.push(prioritiesindex.shift());
       }
    }
}

console.log(solution([1,1,9,1,1,1],0));