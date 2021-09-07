function getAvg(arr,target){
    arr.sort((a,b)=>a-b);
    let sum = 0;
    if(arr[0]===target && arr[0]!==arr[1]){
        arr.shift();
        for(let i = 0;i<arr.length;i++){
            sum+=arr[i];
        }
    }else if(arr[arr.length-1]===target&&arr[arr.length-2]!==arr[arr.length-1]){
        arr.pop();
        for(let i = 0;i<arr.length;i++){
            sum+=arr[i];
        }
    }else{
        for(let i = 0;i<arr.length;i++){
            sum+=arr[i];
        }
    }
    return sum/arr.length;
}
function solution(scores) {
    let newArr = [];
    let answer = [];
    for(let i = 0;i<scores.length;i++){
        newArr.push([]);
    }
    for(let i = 0;i<scores.length;i++){
        for(let k = 0;k<scores.length;k++){
             newArr[i].push(scores[k][i]);
        }
    }
    for(let i = 0;i<scores.length;i++){
        answer.push(getAvg(newArr[i],newArr[i][i]));
    }
    console.log(answer);
    answer = answer.map((v)=>{
        if(v>=90) return 'A'
        else if(v>=80&&v<90) return 'B'
        else if(v>=70&&v<80) return 'C'
        else if(v>=50&&v<70) return 'D'
        else return 'F'
    }).join('')
    return answer;
}
console.log(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]))