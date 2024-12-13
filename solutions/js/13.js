/** @param {string[]} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  const instructions = moves.split("");
  const movements = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  const invertedMovements = { L: "R", R: "L", U: "D", D: "U" };
  const pos = [0, 0];
  for (let i = 0; i < instructions.length; i++) {
    let move = instructions[i];
    switch (move) {
      case "*":
        move = instructions[i + 1];
        break;
      case "!":
        i += 1;
        instructions[i] = invertedMovements[instructions[i]];
        move = instructions[i];
        break;
      case "?":
        i += 1;
        move = instructions[i];
        if (instructions.slice(0, i - 1).includes(move)) continue;
        break;
    }
    pos[0] += movements[move][0];
    pos[1] += movements[move][1];
  }
  return (pos[0] === 0 && pos[1] === 0) || pos;
}

console.log(isRobotBack("R")); // [1, 0]
console.log(isRobotBack("RL")); // true
console.log(isRobotBack("RLUD")); // true
console.log(isRobotBack("*RU")); // [2, 1]
console.log(isRobotBack("R*U")); // [1, 2]
console.log(isRobotBack("LLL!R")); // [-4, 0]
console.log(isRobotBack("R?R")); // [1, 0]
console.log(isRobotBack("U?D")); // true
console.log(isRobotBack("R!L")); // [2,0]
console.log(isRobotBack("U!D")); // [0,2]
console.log(isRobotBack("R?L")); // true
console.log(isRobotBack("U?U")); // [0,1]
console.log(isRobotBack("*U?U")); // [0,2]
console.log(isRobotBack("U?D?U")); // true

// Step-by-step examples:
console.log(isRobotBack("R!U?U")); // [1,0]
// 'R'  -> moves to the right
// '!U' -> inverts and becomes 'D'
// '?U' -> moves upwards, because the 'U' movement hasn't been done yet

console.log(isRobotBack("UU!U?D")); // [0,1]
// 'U'  -> moves upwards
// 'U'  -> moves upwards
// '!U' -> inverts and becomes 'D'
// '?D' -> does not move, since the 'D' movement has already been done

/* 
  Score: ★★★★★
*/
