type BoxSize = "1" | "2" | "5" | "10";

function distributeWeight(weight: number): string {
  const boxRepresentations: Record<BoxSize, string[]> = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };
  const usedBoxes: Record<string, number> = { 1: 0, 2: 0, 5: 0, 10: 0 };
  let result = "";
  let remainder = weight;
  const piledBoxes: BoxSize[] = [];
  for (const size of Object.keys(usedBoxes).reverse()) {
    const quantity = Math.floor(remainder / parseInt(size));
    piledBoxes.unshift(...new Array(quantity).fill(size));
    usedBoxes[size] = quantity;
    remainder = remainder % parseInt(size);
  }
  result += boxRepresentations[piledBoxes[0]].join("\n");
  for (let i = 1; i < piledBoxes.length; i++) {
    const previousBox = piledBoxes[i - 1];
    const box = piledBoxes[i];
    if (previousBox !== box) {
      const startBoxCoverIndex = boxRepresentations[previousBox].at(-1)!.length;
      result += boxRepresentations[box][0].slice(startBoxCoverIndex, -1);
    }
    result += "\n";
    result += boxRepresentations[box].slice(1).join("\n");
  }
  return result;
}

const weights1 = distributeWeight(1);
console.log(weights1);
// Returns:
//  _
// |_|

const weights2 = distributeWeight(2);
console.log(weights2);
// Returns:
//  ___
// |___|

const weights3 = distributeWeight(3);
console.log(weights3);
// Returns:
//  _
// |_|_
// |___|

const weights4 = distributeWeight(4);
console.log(weights4);
// Returns:
//  ___
// |___|
// |___|

const weights5 = distributeWeight(5);
console.log(weights5);
// Returns:
//  _____
// |     |
// |_____|

const weights6 = distributeWeight(6);
console.log(weights6);
// Returns:
//  _
// |_|___
// |     |
// |_____|

/* 
  Score: ★★★★★
*/
