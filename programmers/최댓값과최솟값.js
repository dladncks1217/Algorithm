function solution(s) {
    let answer = [];
    let arr = s.split(" ");
    answer.push(Math.min.apply("",arr))
    answer.push(Math.max.apply("",arr));
    return `${answer[0]} ${answer[1]}`;
}
console.log(solution("-1 -2 -3 -4"));