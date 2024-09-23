function removeDuplicates(nums) {
    var objectFilter = {};
    for (var i = 0; i < nums.length; i++) {
        if (objectFilter[nums[i]]) {
            nums.splice(i, 1);
            i--;
        }
        else {
            objectFilter[nums[i]] = true;
        }
    }
    console.log(nums);
    return nums.length;
}
;
console.log(removeDuplicates([1, 1, 2]));
