function containsDuplicate(nums) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = true;
            continue;
        }
        return true;
    }
    return false;
}
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
