type Shoe = {
  type: "I" | "R";
  size: number;
};
type SizeItem = {
  I: number;
  R: number;
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const sizes: Record<number, SizeItem> = {};
  const result: number[] = [];
  for (const shoe of shoes) {
    sizes[shoe.size] ??= { I: 0, R: 0, size: shoe.size };
    sizes[shoe.size][shoe.type] += 1;
  }
  for (const item of Object.values(sizes)) {
    while (item.I > 0 && item.R > 0) {
      item.I--;
      item.R--;
      result.push(item.size);
    }
  }
  return result;
}

const shoes: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];
const pairs1 = organizeShoes(shoes);
console.log(pairs1);
// [38, 42]

const shoes2: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
const pairs2 = organizeShoes(shoes2);
console.log(pairs2);
// [38, 38]

const shoes3: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];
const pairs3 = organizeShoes(shoes3);
console.log(pairs3);
// [42]

/* 
  Score: ★★★★★
*/
