function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => {
    return a - b;
  });
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
