function summaryRanges(nums: number[]): string[] {
  const list_array: number[][] = [];

  while (nums.length > 0) {
    if (list_array.length === 0) {
      list_array.push(nums.splice(0, 1));
      continue;
    }

    const last_array = list_array.at(-1)!;

    if (nums[0] - last_array!.at(-1)! === 1) {
      last_array?.push(nums.splice(0, 1)[0]);
      continue;
    }

    list_array.push(nums.splice(0, 1));
  }

  return list_array.map((item) => {
    if (item.length === 1) {
      return String(item[0]);
    }

    return `${item.at(0)}->${item.at(-1)}`;
  });
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
