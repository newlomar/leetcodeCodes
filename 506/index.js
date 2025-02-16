var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findRelativeRanks(score) {
    var medalCount = 0;
    var resultArray = [];
    var reverseOrderedScore = __spreadArray([], score, true).sort(function (a, b) { return b - a; });
    var resultObject = {};
    for (var i = 0; i < reverseOrderedScore.length; i++) {
        if (medalCount === 0) {
            resultObject[reverseOrderedScore[i]] = "Gold Medal";
            medalCount++;
            continue;
        }
        if (medalCount === 1) {
            resultObject[reverseOrderedScore[i]] = "Silver Medal";
            medalCount++;
            continue;
        }
        if (medalCount === 2) {
            resultObject[reverseOrderedScore[i]] = "Bronze Medal";
            medalCount++;
            continue;
        }
        resultObject[reverseOrderedScore[i]] = String(i + 1);
    }
    return score.map(function (item) { return resultObject[item]; });
}
console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10, 3, 8, 9, 4]));
