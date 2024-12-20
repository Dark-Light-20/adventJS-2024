/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const receivedObject = {};
  const expectedObject = {};
  const result = { missing: {}, extra: {} };
  for (const gift of received) {
    receivedObject[gift] ??= 0;
    receivedObject[gift]++;
  }
  for (const gift of expected) {
    expectedObject[gift] ??= 0;
    expectedObject[gift]++;
  }
  for (const [gift, quantity] of Object.entries(expectedObject)) {
    receivedObject[gift] ??= 0;
    receivedObject[gift] -= quantity;
    const remainQuantity = receivedObject[gift];
    if (remainQuantity > 0) {
      result.extra[gift] = remainQuantity;
    } else if (remainQuantity < 0) {
      result.missing[gift] = -remainQuantity;
    }
  }
  for (const [gift, quantity] of Object.entries(receivedObject)) {
    if (!result.extra[gift] && quantity > 0) {
      result.extra[gift] = quantity;
    }
  }
  return result;
}

const gifts1 = fixGiftList(
  ["puzzle", "car", "doll", "car"],
  ["car", "puzzle", "doll", "ball"]
);
console.log(gifts1);
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

const gifts2 = fixGiftList(
  ["book", "train", "kite", "train"],
  ["train", "book", "kite", "ball", "kite"]
);
console.log(gifts2);
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

const gifts3 = fixGiftList(
  ["bear", "bear", "car"],
  ["bear", "car", "puzzle", "bear", "car", "car"]
);
console.log(gifts3);
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

const gifts4 = fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]);
console.log(gifts4);
// Returns:
// {
//   missing: {},
//   extra: {}
// }

const gifts5 = fixGiftList(
  ["puzzle", "car", "doll", "car", "test"],
  ["car", "puzzle", "doll", "ball"]
);
console.log(gifts5);
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1, test: 1 }
// }

/* 
  Score: ★★★★★
*/
