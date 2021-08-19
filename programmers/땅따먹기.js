function solution(land) {
    let answer = land;
    let max, sum=0;
    for(let j = 1;j<land.length;j++){
        answer[j]=land[j].map((v,i)=>{
            
            if(i===0)return v+Math.max(land[j-1][1],land[j-1][2],land[j-1][3]);
            if(i===1)return v+Math.max(land[j-1][0],land[j-1][2],land[j-1][3]);
            if(i===2)return v+Math.max(land[j-1][0],land[j-1][1],land[j-1][3]);
            if(i===3)return v+Math.max(land[j-1][0],land[j-1][1],land[j-1][2]);
        })
    }
    return Math.max.apply(null,answer[answer.length-1]);
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]));