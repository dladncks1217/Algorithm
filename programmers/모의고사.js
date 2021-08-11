function solution(answers) {
    let answer = [];
    let guys = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    let correct = [];
    let max = 0;
    for(let i = 0;i<3;i++){
        let rightthing = 0;
        let arrlen = guys[i].length;
        let j = 1;
        answers.forEach((v)=>{
            if(j>arrlen){
                j=1;
            }
            if(guys[i][j-1]===v){
                rightthing++;
            }
            j++;
        })
        correct.push(rightthing);
        rightthing = 0;
    }
    for(let k = 0;k<correct.length;k++){
        if(correct[k]>max){
            max = correct[k];
        }
    }
    for(let k = 1;k<correct.length+1;k++){
        if(max===correct[k-1]){
            answer.push(k);
        }
    }
    return answer;
}
