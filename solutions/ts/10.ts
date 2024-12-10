function compile(instructions: string[]): number | undefined {
  const registers: { [key: string]: number } = { A: 0 };
  let instructionIndex = 0;
  const compilerInstructions: { [key: string]: Function } = {
    MOV: (x: string, y: string) => {
      const value = parseInt(x);
      registers[y] = isNaN(value) ? registers[x] : value;
    },
    INC: (x: string) => {
      registers[x] ??= 0;
      registers[x]++;
    },
    DEC: (x: string) => {
      registers[x] ??= 0;
      registers[x]--;
    },
    JMP: (x: string, y: string) => {
      if (registers[x] === 0) {
        instructionIndex = parseInt(y) - 1;
      }
    },
  };
  while (instructionIndex < instructions.length) {
    const [instruction, param1, param2] =
      instructions[instructionIndex].split(" ");
    compilerInstructions[instruction](param1, param2);
    instructionIndex++;
  }
  return registers["A"] || undefined;
}

const instructions = [
  "MOV -1 C", // copies -1 to register 'C',
  "INC C", // increments the value of register 'C'
  "JMP C 1", // jumps to the instruction at index 1 if 'C' is 0
  "MOV C A", // copies register 'C' to register 'A',
  "INC A", // increments the value of register 'A'
];

const result = compile(instructions); // -> 2
console.log(result);

/**
 Step-by-step execution:
 0: MOV -1 C -> The register C receives the value -1
 1: INC C    -> The register C becomes 0
 2: JMP C 1  -> C is 0, jumps to the instruction at index 1
 1: INC C    -> The register C becomes 1
 2: JMP C 1  -> C is 1, the instruction is ignored
 3: MOV C A  -> Copies register C to A. Now A is 1
 4: INC A    -> The register A becomes 2
 */

/* 
  Score: ★★★★★
*/
