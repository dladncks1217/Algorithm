function solution(k, dungeons) {
  let answer = 0;
  let Dlength = dungeons.length;
  let Dcheck = Array.from({ length: Dlength }, () => 0);
  dungeons.sort((a, b) => {
    return a[0] - b[0];
  });

  function DFS(L, k) {
    if (dungeons[0][0] > k) {
      answer = Math.max(answer, L);
    } else {
      for (let i = 0; i < Dlength; i++) {
        // 최소피로도 이상이면
        if (k >= dungeons[i][0] && Dcheck[i] === 0) {
          Dcheck[i] = 1;
          DFS(L + 1, k - dungeons[i][1]);
          Dcheck[i] = 0;
        }
      }
    }
  }
  DFS(0, k);
  return answer;
}
console.log(
  solution(
    80,
    [
      [80, 20],
      [50, 40],
      [30, 10],
    ],
    3
  )
);
