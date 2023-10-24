function solution(clothes) {
  let answer = 1;
  const types = {};

  clothes.forEach((item) => {
    const [name, type] = item;

    if (types.hasOwnProperty(type)) types[type] += 1;
    else types[type] = 1;
  });

  const clothesKeys = Object.keys(types);

  for (let i = 0; i < clothesKeys.length; i++) {
    answer *= types[clothesKeys[i]] + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
