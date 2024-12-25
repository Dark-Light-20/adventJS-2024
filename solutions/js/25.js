/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let value = 0;
  let instructionIndex = 0;
  let loopIndex = 0;
  while (instructionIndex < code.length) {
    const instruction = code[instructionIndex];
    if (instruction === "+") {
      value++;
    } else if (instruction === "-") {
      value--;
    } else if (instruction === "[") {
      loopIndex = instructionIndex;
      if (value === 0) {
        instructionIndex = code.indexOf("]", instructionIndex);
      }
    } else if (instruction === "]" && value !== 0) {
      instructionIndex = loopIndex;
    } else if (instruction === "{" && value === 0) {
      instructionIndex = code.indexOf("}", instructionIndex);
    }
    instructionIndex++;
  }
  return value;
}

const code1 = execute("+++"); // 3
console.log(code1);

const code2 = execute("+--"); // -1
console.log(code2);

const code3 = execute(">+++[-]"); // 0
console.log(code3);

const code4 = execute(">>>+{++}"); // 3
console.log(code4);

const code5 = execute("+{[-]+}+"); // 2
console.log(code5);

const code6 = execute("{+}{+}{+}"); // 0
console.log(code6);

const code7 = execute("------[+]++"); // 2
console.log(code7);

const code8 = execute("-[++{-}]+{++++}"); // 5
console.log(code8);

/* 
  Score: ★★★★★
*/
