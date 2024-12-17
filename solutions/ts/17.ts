function detectBombs(grid: boolean[][]): number[][] {
  const minesGrid: number[][] = [];
  for (let i = 0; i < grid.length; i++) {
    minesGrid.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      minesGrid[i].push(0);
      let counter = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue; // skip the current cell
          if (grid[i + x]?.[j + y]) counter++;
        }
      }
      minesGrid[i][j] = counter;
    }
  }
  return minesGrid;
}

const bombs1 = detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]);
console.log(bombs1);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

const bombs2 = detectBombs([
  [true, false],
  [false, false],
]);
console.log(bombs2);
// [
//   [0, 1],
//   [1, 1]
// ]

const bombs3 = detectBombs([
  [true, true],
  [false, false],
  [true, true],
]);
console.log(bombs3);
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]

/* 
  Score: ★★★★★
*/
