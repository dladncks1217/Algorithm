function solution(n) {
    let a = [0,1];
    for(let i = 2;i<=n;i++){
        a.push(a[0]+a[1]%1234567);
        a.shift();
    }
    return a[1]%1234567 ;
}