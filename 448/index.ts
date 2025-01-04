function findDisappearedNumbers(nums: number[]): number[] {
  const completeArray: (number | null)[] = [...Array(nums.length + 1).keys()];

  for (let i = 0; i < nums.length; i++) {
    completeArray[nums[i]] = null;
  }

  return completeArray.slice(1).filter((element) => element !== null);
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
