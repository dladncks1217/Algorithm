function solution(n, costs) {
  let answer = 0;
  const set = Array.from({ length: n }, (v, i) => i);
  costs.sort((a, b) => a[2] - b[2]);

  function find(parent) {
    if (set[parent] === parent) return parent;
    else return (set[parent] = find(set[parent]));
  }

  function union(a, b) {
    const parentA = find(a);
    const parentB = find(b);

    parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);
  }

  function checkCycle(a, b) {
    const parentA = find(a);
    const parentB = find(b);
    if (parentA === parentB) return true;
    else return false;
  }

  for (const v of costs) {
    const [vertices1, vertices2, cost] = v;
    if (!checkCycle(vertices1, vertices2)) {
      answer += cost;
      union(vertices1, vertices2);
    }
  }

  return answer;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
