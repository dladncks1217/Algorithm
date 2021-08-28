function solution(A,B){
    let answer = [];
    let arr1 = A.sort((a,b)=> a-b);
    let arr2 = B.sort((a,b)=> b-a);
    for(let i = 0;i<arr1.length;i++){
        answer.push(arr1[i]*arr2[i]);
    }
    return answer.reduce((a,b)=>a+b);
}
console.log(solution([1,4,2],[5,4,4]));