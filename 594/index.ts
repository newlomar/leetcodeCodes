function findLHS(nums: number[]): number {
  let lhs = 0;
  let initialPosition = 0;
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 1; i < sortedNums.length; i++) {
    if (initialPosition === i) {
      continue;
    }

    const difference = nums[i] - nums[initialPosition];

    if (difference === 0) {
      continue;
    }

    if (difference === 1) {
      lhs = i - initialPosition + 1 > lhs ? i - initialPosition + 1 : lhs;
      continue;
    }

    initialPosition++;
    i--;
  }

  return lhs;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));
console.log(findLHS([1, 2, 2, 1]));
