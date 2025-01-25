function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let poisonedDuration = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    poisonedDuration += duration;

    if (timeSeries[i + 1]) {


      if (timeSeries[i] === timeSeries[i + 1]) {
        poisonedDuration -= duration;
        continue;
      }

      if (timeSeries[i] + duration - 1 >= timeSeries[i + 1]) {
        const reduceDuration = Math.abs(timeSeries[i + 1] - (timeSeries[i] + duration - 1)) + 1
        poisonedDuration -= duration > 1 ? reduceDuration : 0
      }
    }
  }

  return poisonedDuration;
};


console.log(findPoisonedDuration([1, 4], 2))
console.log(findPoisonedDuration([1, 2], 2))
console.log(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 1))
console.log(findPoisonedDuration([1, 2, 3, 4, 5], 5))
console.log(findPoisonedDuration([1, 3, 5, 7, 9, 11, 13, 15], 2))
