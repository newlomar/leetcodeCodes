function findRelativeRanks(score: number[]): string[] {
  let medalCount = 0;
  const resultArray: string[] = [];
  const reverseOrderedScore = [...score].sort((a, b) => b - a);
  const resultObject = {};
  for (let i = 0; i < reverseOrderedScore.length; i++) {
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

  return score.map((item) => resultObject[item]);
}

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10, 3, 8, 9, 4]));
