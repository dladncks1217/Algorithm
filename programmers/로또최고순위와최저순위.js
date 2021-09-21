function solution(lottos, win_nums) {
    let answer = [0];
    let maybe = 0;
    let rank=[6,5,4,3,2,1]
    lottos.forEach((v)=>{
        if(v===0) maybe++;
        if(win_nums.indexOf(v)!==-1){
            answer[0]+=1;
        }
    })
    answer.push(answer[0]+maybe);
    answer = answer.map((v)=>{
        if(v===0) return 6;
        return rank.indexOf(v)+1;
    })
    answer.reverse()
    return answer;
}