function intersect(nums1, nums2) {
    var obj_1 = {};
    var obj_2 = {};
    var obj_3 = {};
    var final_arr = [];
    if (nums1.length > nums2.length) {
        for (var i = 0; i < nums1.length; i++) {
            if (!obj_1[nums1[i]]) {
                obj_1[nums1[i]] = 1;
                if (obj_2[nums1[i]]) {
                    obj_3[nums1[i]] = true;
                }
            }
            else {
                obj_1[nums1[i]]++;
            }
            if (!obj_2[nums2[i]]) {
                obj_2[nums2[i]] = 1;
                if (obj_1[nums2[i]]) {
                    obj_3[nums2[i]] = true;
                }
            }
            else {
                obj_2[nums2[i]]++;
            }
        }
        Object.keys(obj_3).forEach(function (num) {
            if (obj_1[num] > obj_2[num]) {
                for (var i = 0; i < obj_2[num]; i++) {
                    final_arr.push(Number(num));
                }
            }
            else {
                for (var i = 0; i < obj_1[num]; i++) {
                    final_arr.push(Number(num));
                }
            }
        });
        return final_arr;
    }
    for (var j = 0; j < nums2.length; j++) {
        if (!obj_1[nums1[j]]) {
            obj_1[nums1[j]] = 1;
            if (obj_2[nums1[j]]) {
                obj_3[nums1[j]] = true;
            }
        }
        else {
            obj_1[nums1[j]]++;
        }
        if (!obj_2[nums2[j]]) {
            obj_2[nums2[j]] = 1;
            if (obj_1[nums2[j]]) {
                obj_3[nums2[j]] = true;
            }
        }
        else {
            obj_2[nums2[j]]++;
        }
    }
    Object.keys(obj_3).forEach(function (num) {
        if (obj_1[num] > obj_2[num]) {
            for (var i = 0; i < obj_2[num]; i++) {
                final_arr.push(Number(num));
            }
        }
        else {
            for (var i = 0; i < obj_1[num]; i++) {
                final_arr.push(Number(num));
            }
        }
    });
    return final_arr;
}
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
