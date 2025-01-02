function thirdMax(nums: number[]): number {
  let max_1: number | null = null;
  let max_2: number | null = null;
  let max_3: number | null = null;

  for (let i = 0; i < nums.length; i++) {
    if (max_1 == null || nums[i] >= max_1) {
      if (nums[i] === max_1) {
        continue
      }
      max_3 = max_2;
      max_2 = max_1;
      max_1 = nums[i];
      continue;
    }

    if (max_2 == null || nums[i] >= max_2) {
      if (nums[i] === max_2) {
        continue
      }
      max_3 = max_2;
      max_2 = nums[i];
      continue;
    }

    if (max_3 == null || nums[i] >= max_3) {
      max_3 = nums[i];
      continue;
    }
  }

  return max_3 !== null ? max_3 : max_1
};

console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([1, 2]))
console.log(thirdMax([2, 2, 3, 1]))
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]))