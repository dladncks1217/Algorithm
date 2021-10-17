function solution(skill, skill_trees) {
  let answer = skill_trees.length;
  let preceded_skill = skill.split("");
  skill_trees = skill_trees.map((v) => {
    let newtree = [];
    for (let i = 0; i < v.length; i++) {
      if (preceded_skill.indexOf(v[i]) !== -1) {
        newtree.push(v[i]);
      }
    }
    newtree = newtree.join("");
    return newtree;
  });

  skill_trees.forEach((v) => {
    // let start = skill.indexOf(v[0]);

    if (v.length === 1) {
      if (skill[0] !== v[0]) {
        answer--;
      }
    } else if (v.length !== 0) {
      for (let i = 0; i < v.length; i++) {
        if (skill[i] !== v[i]) {
          answer--;
          break;
        }
      }
    }
  });
  console.log(skill_trees);
  return answer;
}

console.log(solution("CBD", ["C", "D", "CB", "BDA"]));
