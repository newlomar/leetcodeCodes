function nextGreaterElement(nums1, nums2) {
    var nums1Map = {};
    for (var i = 0; i < nums1.length; i++) {
        nums1Map[nums1[i]] = {
            value: -1,
            available: false,
        };
    }
    for (var i = 0; i < nums2.length; i++) {
        if (nums1Map[nums2[i]]) {
            if (!nums1Map[nums2[i]].available) {
                nums1Map[nums2[i]].available = true;
            }
        }
        for (var j = 0; j < nums1.length; j++) {
            if (!nums1Map[nums1[j]].available) {
                continue;
            }
            if (nums2[i] > nums1[j]) {
                nums1Map[nums1[j]].value = nums2[i];
                nums1Map[nums1[j]].available = false;
            }
        }
    }
    var returnArr = nums1.map(function (item) {
        return nums1Map[item].value;
    });
    return returnArr;
}
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
