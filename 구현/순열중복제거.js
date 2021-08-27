const getPermutations = (array, selectNumber) => {
    const set = new Set();
    let setarr;
    if (selectNumber === 1) {
      return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [fixed, ...permutation]);
  
      set.add(...attached);
    });
    setarr = Array.from(set);
    return setarr;
  };
  
  console.log(getPermutations([1, 1, 1, 1,0,0,0,3], 8));