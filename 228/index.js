function summaryRanges(nums) {
    var list_array = [];
    while (nums.length > 0) {
        if (list_array.length === 0) {
            list_array.push(nums.splice(0, 1));
            continue;
        }
        var last_array = list_array.at(-1);
        if (nums[0] - last_array.at(-1) === 1) {
            last_array === null || last_array === void 0 ? void 0 : last_array.push(nums.splice(0, 1)[0]);
            continue;
        }
        list_array.push(nums.splice(0, 1));
    }
    return list_array.map(function (item) {
        console.log(item);
        if (item.length === 1) {
            return String(item[0]);
        }
        return "".concat(item.at(0), "->").concat(item.at(-1));
    });
}
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
