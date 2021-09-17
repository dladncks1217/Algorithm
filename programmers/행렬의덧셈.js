function solution(arr1, arr2) {
    let answer = [];
    arr1.forEach(()=>{
        answer.push([]);
    })
    arr1.forEach((v,i)=>{
        for(let k = 0;k<v.length;k++){
            answer[i].push(v[k]+arr2[i][k]);
        }
    })
    return answer;
}
console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]))