function arrayPairSum(nums) {
    var sum = 0;
    var reversedSortedNums = nums.sort(function (a, b) { return (a < b ? -1 : 1); }).reverse();
    for (var i = 0; i < reversedSortedNums.length; i += 2) {
        sum += reversedSortedNums[i + 1];
    }
    return sum;
}
console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
