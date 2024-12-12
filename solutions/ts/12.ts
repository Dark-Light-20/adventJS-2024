function calculatePrice(ornaments: string): number | undefined {
  const prices: { [key: string]: number } = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  const validOrnamentsRegex = /^[*o^#@]*$/;
  if (!validOrnamentsRegex.test(ornaments)) return undefined;
  let total = 0;
  for (let i = 0; i < ornaments.length; i++) {
    const ornamentValue = prices[ornaments[i]];
    const nextOrnamentValue = prices[ornaments[i + 1]];
    total += nextOrnamentValue > ornamentValue ? -ornamentValue : ornamentValue;
  }
  return total;
}

const price1 = calculatePrice("***");
// 3   (1 + 1 + 1)
console.log(price1);

const price2 = calculatePrice("*o");
// 4   (5 - 1)
console.log(price2);

const price4 = calculatePrice("o*");
// 6   (5 + 1)
console.log(price4);

const price5 = calculatePrice("*o*");
// 5  (-1 + 5 + 1)
console.log(price5);

const price6 = calculatePrice("**o*");
// 6  (1 - 1 + 5 + 1)
console.log(price6);

const price7 = calculatePrice("o***");
// 8   (5 + 3)
console.log(price7);

const price8 = calculatePrice("*o@");
// 94  (-5 - 1 + 100)
console.log(price8);

const price9 = calculatePrice("*#");
// 49  (-1 + 50)
console.log(price9);

const price10 = calculatePrice("@@@");
// 300 (100 + 100 + 100)
console.log(price10);

const price11 = calculatePrice("#@");
// 50  (-50 + 100)
console.log(price11);

const price12 = calculatePrice("#@Z");
// undefined (Z is unknown)
console.log(price12);

/* 
  Score: ★★★★★
*/
