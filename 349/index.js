function intersection(nums1, nums2) {
    var intersection_arr = [];
    var obj_1 = {};
    var obj_2 = {};
    var obj_3 = {};
    if (nums1.length >= nums2.length) {
        for (var i = 0; i < nums1.length; i++) {
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
        return Object.keys(obj_3).map(function (n) { return Number(n); });
    }
    for (var j = 0; j < nums2.length; j++) {
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
    return Object.keys(obj_3).map(function (n) { return Number(n); });
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
