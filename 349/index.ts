function intersection(nums1: number[], nums2: number[]): number[] {
  const intersection_arr = [];
  const obj_1 = {};
  const obj_2 = {};
  const obj_3 = {};

  if (nums1.length >= nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (!obj_1[nums1[i]]) {
        obj_1[nums1[i]] = true;

        if (obj_2[nums1[i]]) {
          obj_3[nums1[i]] = true;
        }
      }

      if (!obj_2[nums2[i]]) {
        obj_2[nums2[i]] = true;

        if (obj_1[nums2[i]]) {
          obj_3[nums2[i]] = true;
        }
      }
    }

    return Object.keys(obj_3).map((n) => Number(n));
  }

  for (let j = 0; j < nums2.length; j++) {
    if (!obj_1[nums1[j]]) {
      obj_1[nums1[j]] = true;

      if (obj_2[nums1[j]]) {
        obj_3[nums1[j]] = true;
      }
    }

    if (!obj_2[nums2[j]]) {
      obj_2[nums2[j]] = true;

      if (obj_1[nums2[j]]) {
        obj_3[nums2[j]] = true;
      }
    }
  }

  return Object.keys(obj_3).map((n) => Number(n));
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
