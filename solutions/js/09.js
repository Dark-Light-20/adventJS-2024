/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let rowIndex = board.findIndex((row) => row.includes("@"));
  let colIndex = board[rowIndex].indexOf("@");
  const results = { "*": "eat", "·": "none" };
  const movements = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  rowIndex += movements[mov][0];
  colIndex += movements[mov][1];
  const nextElement = board[rowIndex]?.[colIndex];
  return results[nextElement] ?? "crash";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, "R"));
// ➞ 'none'
// The train moves to the right and there is empty space on the right

/* 
  Score: ★★★★★
*/
