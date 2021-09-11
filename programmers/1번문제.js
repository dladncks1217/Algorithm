function solution(id_list, report, k) {
    let answer = [];
    let reportedCount = [];
    let arrestedUser = []; // 정지된 유저들
    let first_report_Duplication = [];
    let reportsuccessUser = []; // 정지시키는데 성공한 유저들
    id_list.forEach((v)=>{ // 각 유저 신고당한 횟수
        first_report_Duplication.push([])
        answer.push(0);
        reportedCount.push(0);
    })
    report.forEach((v,i)=>{
        let reportUser = v.split(' ')[0]; // 신고자
        let reportedUser = v.split(' ')[1]; // 신고당한사람
        let reporteduserindex = id_list.indexOf(reportedUser);
        if(first_report_Duplication[reporteduserindex].indexOf(reportUser)===-1){
            reportedCount[reporteduserindex] += 1; // 유저 신고당한 횟수 추가
            first_report_Duplication[reporteduserindex].push(reportUser);
        }
    })
    reportedCount.forEach((v,i)=>{ // 정지 유저 종합하기
        if(v>=k){
            arrestedUser.push(id_list[i]);
        }
    })
    arrestedUser.forEach(v=>reportsuccessUser.push([])); // 정지시키는데 성공한 유저들 중복 확인 배열 초기화
    report.forEach((v,i)=>{
        let reportUser = v.split(' ')[0]; // 신고한사람
        let reportedUser = v.split(' ')[1]; // 신고당한사람
        let userindex = id_list.indexOf(reportUser); // 신고한사람 아이디번호
        if(arrestedUser.indexOf(reportedUser)!==-1){ // 이게 아니면 정지당한사람이 아님
            let reportedUserIndex = arrestedUser.indexOf(reportedUser); // 정지 유저중 몇번째인지
            if(reportsuccessUser[reportedUserIndex].indexOf(reportUser)===-1){ // 아직 신고기록이 없다면
                reportsuccessUser[reportedUserIndex].push(reportUser); // 신고한사람 중복 제거
                answer[userindex]+=1;
            }
        }
    })

    return answer;
}

console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"], 3));

