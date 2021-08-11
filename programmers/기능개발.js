function solution(progresses, speeds) {
    let answer = [];
    let day=0;
    while(progresses.length!==0){
        progresses.forEach((v,i)=>{ // 하루 지나면 진행도
            progresses[i]=v+speeds[i];
        });
        if(progresses[0]>=100){
            progresses.shift(); // 일단 완료된거
            day++;
            while(progresses[0]>=100){
                day++;
                progresses.shift(); // 그 외로도 완료된거
            }
        }
        if(day!==0){
            answer.push(day);
            day = 0;
        }
    }

    return answer;
}

console.log(solution([93,30,55],[1,30,5]));