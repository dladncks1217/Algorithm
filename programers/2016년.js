function solution(a, b) {
    let answer = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
    let month = [31,29,31,30,31,30,31,31,30,31,30,31];
    let i = 4;
    let sum = 0;
    if(a===1){
        sum+=b;
        sum=(sum+3)%7;
        sum = answer[sum];
        return sum;
    }
    for(let j = 0;j<a-1;j++){
        sum+=month[j];
    }
    sum-=4;
    sum=sum%7;
    sum+=b;
    sum=sum%7;
    sum = answer[sum];
    return sum;
}
