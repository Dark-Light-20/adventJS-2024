function findMissingNumbers(nums: number[]): number[] {
  const missing = [];
  const list = new Set(nums);
  const limit = Math.max(...list);
  for (let i = 1; i <= limit; i++) {
    if (!list.has(i)) missing.push(i);
  }
  return missing;
}

const missing1 = findMissingNumbers([1, 2, 4, 6]);
console.log(missing1);
// [3, 5]

const missing2 = findMissingNumbers([4, 8, 7, 2]);
console.log(missing2);
// [1, 3, 5, 6]

const missing3 = findMissingNumbers([3, 2, 1, 1]);
console.log(missing3);
// []

const missing4 = findMissingNumbers([5, 5, 5, 3, 3, 2, 1]);
console.log(missing4);
// [4]

/* 
  Score: ★★★★★
*/
