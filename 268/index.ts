function missingNumber(nums: number[]): number {
  const complete_array_from_zero_to_n = [...Array(nums.length + 1).keys()];

  const concatenated_array = [...complete_array_from_zero_to_n, ...nums];

  return concatenated_array.reduce((acc, val) => val ^ acc, 0);
}

console.log(missingNumber([3, 0, 1]));
