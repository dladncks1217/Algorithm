function solution(dartResult) {
    let answer = 0;
    let numbers = [];
    let operators = [];
    dartResult = dartResult.split('');
    dartResult.push('');
    let sum = [];
    for(let i = 0; i<dartResult.length;i++){
        if(dartResult[i]==='1'&&dartResult[i+1]==='0'){ // 10인지 확인
            numbers.push(10);
            i++;
            continue;
        }
        if(dartResult[i]!=='' && !isNaN(Number(dartResult[i]))){
            numbers.push(dartResult[i]);
        }else if(dartResult[i]!=='' && isNaN(Number(dartResult[i]))){
            operators.push(dartResult[i]);
        }
    }
    numbers = numbers.map(v=>Number(v));
    let a = 0;
    for(let i = 0; i<operators.length; i++){
        if(operators[i]==='S'){
            sum.push(numbers[a]);
            a++;
        }else if(operators[i]==='D'){
            sum.push(Math.pow(numbers[a],2));
            a++;
        }else if(operators[i]==='T'){
            sum.push(Math.pow(numbers[a],3));
            a++;    
        }else if(operators[i]==='*'){
            sum[sum.length-1] = sum[sum.length-1]*2;
            sum[sum.length-2] = sum[sum.length-2]*2;
        }else if(operators[i]==='#'){
            sum[sum.length-1] = -sum[sum.length-1];
        }
    }
    sum.forEach(v=>answer+=v);
    return answer;
}
console.log(solution('1D2S#10S'))