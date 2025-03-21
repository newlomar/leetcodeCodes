function distributeCandies(candyType) {
    const setCandies = new Set(candyType);
    const setSize = setCandies.size;
    const halfCandies = candyType.length / 2;
    if (setSize < halfCandies) {
        return setSize;
    }
    return halfCandies;
}
console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]));
