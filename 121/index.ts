function maxProfit(prices: number[]): number {
  let profit = 0;

  let minValue = 0;

  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      minValue = prices[i];
      continue;
    }

    if (prices[i] - minValue > profit) {
      profit = prices[i] - minValue;
    }

    if (prices[i] < minValue) {
      minValue = prices[i];
    }
  }

  return profit;
}

// Third attempt - Time Limit Exceeded for GIANT array (200/212 testcases):

// function maxProfit(prices: number[]): number {
//   let profit = 0;

//   const prices_2: number[] = [];

//   for (let i = 0; i < prices.length; i++) {
//     if (prices_2.length === 0) {
//       prices_2.push(prices[i]);
//       continue;
//     }

//     if (prices[i] - Math.min(...prices_2) > profit) {
//       profit = prices[i] - Math.min(...prices_2);
//     }

//     prices_2.push(prices[i]);
//   }

//   return profit;
// }

// Second attempt - Time Limit Exceeded for GIANT array (200/212 testcases):

// function maxProfit(prices: number[]): number {
//   let profit = 0;

//   const maxValue = Math.max(...prices);
//   const minValue = Math.min(...prices);

//   const indexOfMaxValue = prices.indexOf(maxValue);
//   const indexOfMinValue = prices.indexOf(minValue);

//   if (indexOfMaxValue > indexOfMinValue) {
//     return maxValue - minValue;
//   }

//   for (
//     let comparisonGap = 1;
//     comparisonGap < prices.length - 1;
//     comparisonGap++
//   ) {
//     for (
//       let currentPosition = 0;
//       currentPosition < prices.length;
//       currentPosition++
//     ) {
//       if (currentPosition + comparisonGap > prices.length - 1) {
//         break;
//       }

//       const valueOnLeft = prices[currentPosition];
//       const valueOnRight = prices[currentPosition + comparisonGap];

//       // if (valueOnLeft === minValue && valueOnRight === maxValue) {
//       //   return maxValue - minValue;
//       // }

//       if (valueOnLeft < valueOnRight && valueOnRight - valueOnLeft > profit) {
//         profit = valueOnRight - valueOnLeft;
//       }
//     }
//   }
//   return profit;
// }

// console.log(maxProfit([7, 6, 4, 3, 1]));

//First Attempt -- Failed for cases like: [2, 4, 1], where the Max is before the Min, but there is a intermediate value that is less than the Max and its before the max. So you lose a window of buying, removing the max

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

console.log(maxProfit([7, 6, 4, 3, 1]));
