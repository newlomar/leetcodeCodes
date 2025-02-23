function distributeCandies(candyType) {
    var setCandies = new Set(candyType);
    var setSize = setCandies.size;
    var halfCandies = candyType.length / 2;
    if (setSize < halfCandies) {
        return setSize;
    }
    return halfCandies;
}
console.log([1, 1, 2, 2, 3, 3]);
console.log([1, 1, 2, 3]);
console.log([6, 6, 6, 6]);
