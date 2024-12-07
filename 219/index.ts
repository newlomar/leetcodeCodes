function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const indexValueeObjPositionI: number | number[] | undefined = obj[nums[i]];

    if (indexValueeObjPositionI || indexValueeObjPositionI === 0) {
      if (typeof indexValueeObjPositionI === "number") {
        if (Math.abs(indexValueeObjPositionI - i) <= k) {
          return true;
        }

        obj[nums[i]] = [indexValueeObjPositionI, i];
      } else {
        for (let j = 0; j < indexValueeObjPositionI.length; j++) {
          if (Math.abs(indexValueeObjPositionI[j] - i) <= k) {
            return true;
          }
        }
        obj[nums[i]].push(i);
      }

      continue;
    }

    obj[nums[i]] = i;
  }

  return false;
}

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([99, 99], 2));
