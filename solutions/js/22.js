/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  const result = [];
  function generateCombinations(arr, size, start, temp) {
    if (temp.length === size) {
      result.push([...temp]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      generateCombinations(arr, size, i + 1, temp);
      temp.pop();
    }
  }
  for (let i = 1; i <= gifts.length; i++) {
    generateCombinations(gifts, i, 0, []);
  }
  return result;
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
