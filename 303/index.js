var NumArray = /** @class */ (function () {
    function NumArray(nums) {
        this.nums = nums;
    }
    NumArray.prototype.sumRange = function (left, right) {
        return this.nums.slice(left, right + 1).reduce(function (acc, val) { return acc + val; }, 0);
    };
    return NumArray;
}());
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
