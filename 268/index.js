var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function missingNumber(nums) {
    var complete_array_from_zero_to_n = __spreadArray([], Array(nums.length + 1).keys(), true);
    var concatenated_array = __spreadArray(__spreadArray([], complete_array_from_zero_to_n, true), nums, true);
    return concatenated_array.reduce(function (acc, val) { return val ^ acc; }, 0);
}
console.log(missingNumber([3, 0, 1]));
