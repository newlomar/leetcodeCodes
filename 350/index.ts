function intersect(nums1: number[], nums2: number[]): number[] {
  const obj_1 = {};
  const obj_2 = {};
  const obj_3 = {};
  const final_arr: number[] = [];
  if (nums1.length > nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (!obj_1[nums1[i]]) {
        obj_1[nums1[i]] = 1;

        if (obj_2[nums1[i]]) {
          obj_3[nums1[i]] = true;
        }
      } else {
        obj_1[nums1[i]]++;
      }

      if (!obj_2[nums2[i]]) {
        obj_2[nums2[i]] = 1;

        if (obj_1[nums2[i]]) {
          obj_3[nums2[i]] = true;
        }
      } else {
        obj_2[nums2[i]]++;
      }
    }

    Object.keys(obj_3).forEach((num) => {
      if (obj_1[num] > obj_2[num]) {
        for (let i = 0; i < obj_2[num]; i++) {
          final_arr.push(Number(num));
        }
      } else {
        for (let i = 0; i < obj_1[num]; i++) {
          final_arr.push(Number(num));
        }
      }
    });
    return final_arr;
  }

  for (let j = 0; j < nums2.length; j++) {
    if (!obj_1[nums1[j]]) {
      obj_1[nums1[j]] = 1;

      if (obj_2[nums1[j]]) {
        obj_3[nums1[j]] = true;
      }
    } else {
      obj_1[nums1[j]]++;
    }

    if (!obj_2[nums2[j]]) {
      obj_2[nums2[j]] = 1;

      if (obj_1[nums2[j]]) {
        obj_3[nums2[j]] = true;
      }
    } else {
      obj_2[nums2[j]]++;
    }
  }

  Object.keys(obj_3).forEach((num) => {
    if (obj_1[num] > obj_2[num]) {
      for (let i = 0; i < obj_2[num]; i++) {
        final_arr.push(Number(num));
      }
    } else {
      for (let i = 0; i < obj_1[num]; i++) {
        final_arr.push(Number(num));
      }
    }
  });

  return final_arr;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
