function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        if (str == ' ') {
          answer += ' ';
          continue;
        }
        const upperOrLower = upper.includes(str) ? upper : lower;
        let index = upperOrLower.indexOf(str) + n;
        if (index >= upperOrLower.length) {
        index -= upperOrLower.length;
        }
        answer += upperOrLower[index];
    }
    return answer;
}
console.log(solution('a B z',4));