function solution(numbers) {
    let answer = 0;
    let allnum = [1,2,3,4,5,6,7,8,9,0];
    numbers.forEach((v)=>{
        if(allnum.indexOf(v)!==-1){
            allnum.splice(allnum.indexOf(v),1);
        }
    })
    allnum.forEach(v=>answer+=v);
    return answer;
}
console.log(solution([1,2,3,4,6,7,8,0]))