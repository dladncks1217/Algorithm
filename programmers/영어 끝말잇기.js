// https://programmers.co.kr/learn/courses/30/lessons/12981
function solution(n, words) {
    let answer = [];
    let alreadyuseanswer = [];
    let man = [];
    let cycle = 1;
    let mancheck = 1;
    for(let i = 0;i<n;i++){ // 사람 횟수 카운트
        man.push(0);
    }
    alreadyuseanswer.push(words[0]);
    man[0]=1;
    for (let i = 1; i < words.length; i++) {
        man[mancheck]+=1; // 특정 사람 n번째 시도 초기화
        if (words[i].length === 1) { // 한글자일때
            answer.push(mancheck+1);
            answer.push(cycle);
            return answer;
        }
        if (words.length - 1 !== i) { // 글자잘못댔을경우
            if (words[i][0] !== words[i-1][words[i-1].length - 1]) {
                answer.push(mancheck+1);
                answer.push(cycle);
                return answer;
            }
        }
        if (alreadyuseanswer.indexOf(words[i]) !== -1) { // 이미 있던거일때
            answer.push(mancheck+1);
            answer.push(cycle);
            return answer;
        }
        if (mancheck === n-1) {
            mancheck = 0;
            cycle++;
        }else{
            mancheck++;
        }
        alreadyuseanswer.push(words[i]);
    }
    return [0,0];
}
console.log(solution(2,["hello", "one", "even", "never", "now", "world", "draw"]));