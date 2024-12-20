function fixGiftList(
  received: string[],
  expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
  const receivedObject: Record<string, number> = {};
  const expectedObject: Record<string, number> = {};
  const result: {
    missing: Record<string, number>;
    extra: Record<string, number>;
  } = {
    missing: {},
    extra: {},
  };
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

const giftsList1 = fixGiftList(
  ["puzzle", "car", "doll", "car"],
  ["car", "puzzle", "doll", "ball"]
);
console.log(giftsList1);
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

const giftsList2 = fixGiftList(
  ["book", "train", "kite", "train"],
  ["train", "book", "kite", "ball", "kite"]
);
console.log(giftsList2);
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

const giftsList3 = fixGiftList(
  ["bear", "bear", "car"],
  ["bear", "car", "puzzle", "bear", "car", "car"]
);
console.log(giftsList3);
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

const giftsList4 = fixGiftList(
  ["bear", "bear", "car"],
  ["car", "bear", "bear"]
);
console.log(giftsList4);
// Returns:
// {
//   missing: {},
//   extra: {}
// }

const giftsList5 = fixGiftList(
  ["puzzle", "car", "doll", "car", "test"],
  ["car", "puzzle", "doll", "ball"]
);
console.log(giftsList5);
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1, test: 1 }
// }

/* 
  Score: ★★★★★
*/
