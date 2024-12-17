/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s: string): string {
  const pile: string[] = [];
  for (const snow of s) {
    if (snow === pile.at(-1)) {
      pile.pop();
      continue;
    }
    pile.push(snow);
  }
  return pile.join("");
}

const snow1 = removeSnow("zxxzoz"); // -> "oz"
console.log(snow1);
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

const snow2 = removeSnow("abcdd"); // -> "abc"
console.log(snow2);
// 1. Remove "dd", resulting in "abc"

const snow3 = removeSnow("zzz"); // -> "z"
console.log(snow3);
// 1. Remove "zz", resulting in "z"

const snow4 = removeSnow("a"); // -> "a"
console.log(snow4);
// No duplicate piles

/* 
  Score: ★★★★★
*/
