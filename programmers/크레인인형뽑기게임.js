function solution(board, move) {
    let answer = 0;
    let boardstack = [];
    let movestack = [];
    let moves = move.map((v)=>v-1);
    for(let i = 0;i<board[0].length;i++){
        boardstack[i] = [];
    }
    for(let i = 0;i<board.length;i++){
        for(let k = 0;k<board[0].length;k++){
            boardstack[i].push(board[k][i]);
        }
    }
    for(let i=0;i<boardstack.length;i++){ // 0 걸러내기
        for(let k = 0;k<boardstack[i].length;k++){
            if(boardstack[i][0]===0){
                boardstack[i].shift();
            }
        }
    }
    for(let i = 0;i<moves.length;i++){
        if(boardstack[moves[i]][0]!==0&&boardstack[moves[i]][0]!==undefined){
            movestack.push(boardstack[moves[i]].shift());
        }
        if(movestack.length>=2&&movestack[movestack.length-1]===movestack[movestack.length-2]){
            movestack.pop();
            movestack.pop();
            answer+=2;
        }
        
    }
    return answer;
}
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 5, 1, 4, 3]));