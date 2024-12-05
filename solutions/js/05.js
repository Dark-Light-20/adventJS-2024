function organizeShoes(shoes) {
  const sizes = {};
  const result = [];
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

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];
const result1 = organizeShoes(shoes);
console.log(result1);
// [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
const result2 = organizeShoes(shoes2);
console.log(result2);
// [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];
const result3 = organizeShoes(shoes3);
console.log(result3);
// [42]

/* 
  Score: ★★★★★
*/
