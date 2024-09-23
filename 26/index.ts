function removeDuplicates(nums: number[]): number {
  const objectFilter = {}

  for(let i=0; i < nums.length; i++) {
    if (objectFilter[nums[i]]) {
      nums.splice(i, 1);
      i--;
    }
    else {
      objectFilter[nums[i]] = true
    }
  }
  return nums.length;
};
console.log(removeDuplicates([1,1,2]));