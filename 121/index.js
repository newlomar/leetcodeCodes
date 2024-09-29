function maxProfit(prices) {
    var profit = 0;
    var maxValue = Math.max.apply(Math, prices);
    var minValue = Math.min.apply(Math, prices);
    var indexOfMaxValue = prices.indexOf(maxValue);
    var indexOfMinValue = prices.indexOf(minValue);
    if (indexOfMaxValue > indexOfMinValue) {
        return maxValue - minValue;
    }
    for (var comparisonGap = 1; comparisonGap < prices.length - 1; comparisonGap++) {
        for (var currentPosition = 0; currentPosition < prices.length; currentPosition++) {
            if (currentPosition + comparisonGap > prices.length - 1) {
                break;
            }
            var valueOnLeft = prices[currentPosition];
            var valueOnRight = prices[currentPosition + comparisonGap];
            // if (valueOnLeft === minValue && valueOnRight === maxValue) {
            //   return maxValue - minValue;
            // }
            if (valueOnLeft < valueOnRight && valueOnRight - valueOnLeft > profit) {
                profit = valueOnRight - valueOnLeft;
            }
        }
    }
    return profit;
}
console.log(maxProfit([7, 6, 4, 3, 1]));
//first try
// function maxProfit(prices: number[]): number {
//   let profit = 0;
//   let i = 0;
//   while (i < prices.length) {
//     const maxValue = Math.max(...prices);
//     const minValue = Math.min(...prices);
//     const indexOfMaxValue = prices.indexOf(maxValue);
//     const indexOfMinValue = prices.indexOf(minValue);
//     if (indexOfMaxValue > indexOfMinValue) {
//       profit = maxValue - minValue;
//       break;
//     }
//     prices.splice(indexOfMaxValue, 1);
//     i++;
//   }
//   return profit;
// }
// console.log(maxProfit([7, 6, 4, 3, 1]));
