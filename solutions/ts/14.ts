function minMovesToStables(reindeer: number[], stables: number[]): number {
  let moves = 0;
  const stablesSet = new Set(stables);
  for (const pos of reindeer) {
    const actualStablesArray = Array.from(stablesSet);
    const minMovesData = actualStablesArray.slice(1).reduce(
      (movesData, stable) => {
        const movement = Math.abs(pos - stable);
        return movement < movesData[0] ? [movement, stable] : movesData;
      },
      [Math.abs(pos - actualStablesArray[0]), actualStablesArray[0]]
    );
    moves += minMovesData[0];
    stablesSet.delete(minMovesData[1]);
  }
  return moves;
}

const moves1 = minMovesToStables([2, 6, 9], [3, 8, 5]); // -> 3
console.log(moves1);
// Explanation:
// Reindeer at positions: 2, 6, 9
// Stables at positions: 3, 8, 5
// 1st reindeer: moves from position 2 to the stable at position 3 (1 move).
// 2nd reindeer: moves from position 6 to the stable at position 5 (1 move)
// 3rd reindeer: moves from position 9 to the stable at position 8 (1 move).
// Total moves: 1 + 1 + 1 = 3 moves

const moves2 = minMovesToStables([1, 1, 3], [1, 8, 4]);
console.log(moves2);
// Explanation:
// Reindeer at positions: 1, 1, 3
// Stables at positions: 1, 8, 4
// 1st reindeer: does not move (0 moves)
// 2nd reindeer: moves from position 1 to the stable at position 4 (3 moves)
// 3rd reindeer: moves from position 3 to the stable at position 8 (5 moves)
// Total moves: 0 + 3 + 5 = 8 moves

/* 
  Score: ★★★★★
*/
