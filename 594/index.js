function findLHS(nums) {
    var lhs = 0;
    var initialPosition = 0;
    var sortedNums = nums.sort(function (a, b) { return a - b; });
    for (var i = 1; i < sortedNums.length; i++) {
        if (initialPosition === i) {
            continue;
        }
        var difference = nums[i] - nums[initialPosition];
        if (difference === 0) {
            continue;
        }
        if (difference === 1) {
            lhs = i - initialPosition + 1 > lhs ? i - initialPosition + 1 : lhs;
            continue;
        }
        initialPosition++;
        i--;
    }
    return lhs;
}
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));
console.log(findLHS([1, 2, 2, 1]));
