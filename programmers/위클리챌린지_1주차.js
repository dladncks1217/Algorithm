function solution(price, money, count) {
    let answer = -1;
    let N = 1;
    let resultmoney;
    for(let i = 0;i<count; i++,N++){
        resultmoney = N*price;
        money-=resultmoney;
    }
    return money<0?-money:0;
}