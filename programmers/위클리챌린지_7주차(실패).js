function solution(enter, leave) {
    let answer = [];
    let inperson = [];
    enter.forEach(v=>answer.push(0)); // 만난사람
    inperson.push(enter.shift()); // 첫 사람 입장
    while(inperson.length!==0){
        if(inperson.indexOf(leave[0])===-1){ // 아직 나가는사람이 없으면
            inperson.push(enter.shift()); // 들어와있는사람 추가
        }else{
            let outperson = leave.shift();
            inperson.splice(inperson.indexOf(outperson),1); // 하나 빼주기
            // 계산하는코드
            
        }
    }


    return answer;
}

console.log(solution([1,4,2,3],[2,1,3,4]));