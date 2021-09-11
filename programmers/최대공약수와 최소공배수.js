function solution(n, m) {
  let answer = [];
  let first_n = n;
  let first_m = m;

  while (m != 0) {
    let tmp = m;
    m = n % m;
    n = tmp;
  }
  answer.push(n); // 최대공약수
  answer.push((first_n * first_m) / n); //최소공배수
  return answer;
}
