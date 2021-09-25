function solution(N, stages) {
    let answer = [];
    let totalNum = stages.length;
    for(let i = 1 ;i<=N; i++){
        let challenge = stages.filter(v=>v===i).length; // 그 라운드 도전하는사람
        let failRatio = 0;
        if(challenge === 0){
            failRatio = 0;
        }else{
            failRatio = challenge/totalNum;
        }
        totalNum -= challenge; // 도전했던사람 제외
        answer.push({id:i, ratio:failRatio}); // 배열저장.
    }

    answer.sort((a,b)=>{
        if(a.ratio>b.ratio){
            return -1
        }else if(a.ratio<b.ratio){
            return 1;
        }else{
            if(a.id>b.id){
                return 1;
            }else{
                return -1;
            }
        }
    })
    answer = answer.map((v)=>v.id)
    return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])