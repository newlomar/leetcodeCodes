// Attemp 4 - Bitwise - Extra
function singleNumber2(nums: number[]): number {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
      continue;
    }

    map.set(nums[i], true);
  }

  return Array.from(map.keys())[0];
}
// Attempt 3 - Success
function singleNumber(nums: number[]): number {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
      continue;
    }

    map.set(nums[i], true);
  }

  return Array.from(map.keys())[0];
}

// Attempt 2 - Fail

// function singleNumber(nums: number[]): number {
//   const setWithDuplicates = new Set<number>();
//   const setFromArray = new Set(nums);

//   const objOfNumbers = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (objOfNumbers[nums[i]]) {
//       setWithDuplicates.add(nums[i]);
//       continue;
//     }

//     objOfNumbers[nums[i]] = 1;
//   }

//   const finalSet = setFromArray.difference(setWithDuplicates);
//   const iterator = finalSet.values();
//   return iterator.next().value;
// }

// Attempt 1 - Fail
// function singleNumber(nums: number[]): number {
//   const arrOfNumbers: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (arrOfNumbers.find((item) => item === nums[i])) {
//       arrOfNumbers.splice(arrOfNumbers.indexOf(nums[i]), 1);
//       continue;
//     }

//     arrOfNumbers.push(nums[i]);
//   }

//   return arrOfNumbers[0];
// }

console.log(
  singleNumber2([
    17, 12, 5, -6, 12, 4, 17, -5, 2, -3, 2, 4, 5, 16, -3, -4, 15, 15, -4, -5,
    -6,
  ])
);
