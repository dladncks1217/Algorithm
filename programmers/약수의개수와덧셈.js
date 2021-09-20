function solution(left, right) {
    let answer = 0;
    let nums = [];
    let countcheck = [];
    for(let i = left; i<=right;i++){
        nums.push(i);
    }
    countcheck = nums.map((v,i)=>{
        let result = 0;
        for(let k = 1;k<=v;k++){
            if(v%k===0) result++;
        }
        return result;
    })
    countcheck.forEach((v,i)=>{
        v%2===0?answer+=nums[i]:answer-=nums[i];
    })
    return answer;
}