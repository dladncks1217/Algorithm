function solution(month, day, weeks) {
    let answer = [];
    const months = [0,31,28,31,30,31,30,31,31,30,31,30,31]; // 각 월 날짜들
    nowMonth = month;
    nowDay = day;

    let dayCheck = 0;
    for(let i = 0; i < month; i++){ // 날짜 일욜부터로 전환
        dayCheck += months[i];
    }
    dayCheck += nowDay; // 날짜로 전환 완료
    console.log(dayCheck)
    if(dayCheck>7 && dayCheck%7!==1){

        let decrease; 
        if(dayCheck%7===0){
            decrease = 6;
        }else {
            decrease = (dayCheck%7)-1; // 감소해야하는 날짜의 수
        }
        if(nowDay-decrease<1){ // 감소하려는데 0일된다면
            decrease -= nowDay;
            nowMonth -= 1; // 달 줄이기
            nowDay = months[nowMonth] - decrease;
        }else{
            nowDay -= decrease;

        }
    }

    // 결과 계산
    for(let i = 0; i < weeks; i++){ // 주 만큼 출력해야하니 주 만큼 반복
        let weekArr = []; // 값을 넣어줄 배열
        for(let k = 0; k < 7; k++){ // 주는 7일이기에 7번 반복

            if(months[nowMonth]<nowDay){ // month에 날짜 넘어가면 month++, day는 1로.
                nowMonth++;
                nowDay = 1;
            }
            if(i===0 && k===0){
                weekArr.push(`${nowMonth}/${nowDay}`); // 1/1형태로 넣어주기
                nowDay++; // 날짜 ++
                continue;
            }
            if(nowMonth>12) break; // 2023년 넘어가면 출력 안함.
            else{
                if(nowDay===1){ // 현재 1일이면
                    let input = `${nowMonth}/1`; // 1/1형태로 만들어주기
                    weekArr.push(input);
                    nowDay++; // 날짜 ++
                }else{ // 1일아니면 일단 날짜 넣어주기
                    weekArr.push(`${nowDay}`);
                    nowDay++; // 날짜 ++
                }
            }
        }
        if(weekArr.length) answer.push(weekArr.slice()) // 한 주 돌았으면 week push
    }

    return answer;
}