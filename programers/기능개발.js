function solution(progresses, speeds) {
    let answer = [];
    let count=0;
    while(progresses.length!==0){
        progresses.forEach((v,i)=>{ // 하루 지나면 진행도
            progresses[i]=v+speeds[i];
        });
        if(progresses[0]>=100){
            progresses.shift(); // 일단 완료된거
            speeds.shift();
            count++;
            while(progresses[0]>=100){
                count++;
                progresses.shift(); // 그 외로도 완료된거
                speeds.shift();
            }
        }
        if(count!==0){
            answer.push(count);
            count = 0;
        }
    }
    return answer;
}
console.log(solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5, 10, 7]));