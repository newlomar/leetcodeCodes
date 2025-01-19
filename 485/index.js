function findMaxConsecutiveOnes(nums) {
    var max = 0;
    var currentSum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentSum++;
            max = currentSum > max ? currentSum : max;
        }
        else {
            max = currentSum > max ? currentSum : max;
            currentSum = 0;
        }
    }
    return max;
}
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
