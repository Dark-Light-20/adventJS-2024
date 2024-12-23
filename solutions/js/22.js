/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  const result = [];
  function generateCombinations(index, arr) {
    if (arr.length > 0) {
      result.push([...arr]);
    }
    for (let i = index; i < gifts.length; i++) {
      arr.push(gifts[i]);
      generateCombinations(i + 1, arr);
      arr.pop();
    }
  }
  generateCombinations(0, []);
  return result.sort((a, b) => a.length - b.length);
}

const giftsSet1 = generateGiftSets(["car", "doll", "puzzle"]);
console.log(giftsSet1);
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

const giftsSet2 = generateGiftSets(["ball"]);
console.log(giftsSet2);
// [
//   ['ball']
// ]

const giftsSet3 = generateGiftSets(["game", "pc"]);
console.log(giftsSet3);
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]

/* 
  Score: ★★
*/
