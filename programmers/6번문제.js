function solution(board, skill) {
    skill.forEach((v)=>{
        let degree = v[v.length-1];
        if(v[0]===1){ // 공격
            for(let i = v[2];i<=v[4];i++){
                for(let k = v[1];k<=v[3];k++){
                    board[k][i]-=degree;
                }
            }
        }else{ // 회복
            for(let i = v[2];i<=v[4];i++){
                for(let k = v[1];k<=v[3];k++){
                    board[k][i]+=degree;
                }
            }
        }
    })
    board = board.flat();
    board = board.filter(v=>v>0);
    return board.length;
}

console.log(solution([[1,2,3],[4,5,6],[7,8,9]],[[1,1,1,2,2,4],[1,0,0,1,1,2],[2,2,0,2,0,100]]))