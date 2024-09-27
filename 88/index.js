var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function merge(nums1, m, nums2, n) {
    nums1.splice.apply(nums1, __spreadArray([m, n], nums2, false));
    nums1.sort(function (a, b) {
        return a - b;
    });
    console.log(nums1);
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
