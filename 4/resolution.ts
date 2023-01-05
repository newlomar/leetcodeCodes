function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const resultSortedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  if (resultSortedArray.length % 2 === 0) {
    let median =
      (resultSortedArray[resultSortedArray.length / 2] +
        resultSortedArray[resultSortedArray.length / 2 - 1]) /
      2;
    return median;
  } else {
    return resultSortedArray[Math.floor(resultSortedArray.length / 2)];
  }
}
