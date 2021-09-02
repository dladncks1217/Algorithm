function solution(strings, n) {
    var answer = strings.sort((a,b)=>{
        if(a[n]===b[n]){
            return (a>b)-(a<b)
        }else{
            return (a[n]>b[n])-(a[n]<b[n])
        } 
    });
    return answer;
}