function majorityElement(nums: number[]): number {
  const obj = {};
  const halfLen = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;

      if (obj[nums[i]] >= halfLen) {
        return nums[i];
      }

      continue;
    }

    obj[nums[i]]++;

    if (obj[nums[i]] >= halfLen) {
      return nums[i];
    }
  }

  return 0;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
