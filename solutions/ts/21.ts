function treeHeight(
  tree: { value: string; left: any; right: any } | null
): number {
  if (!tree) return 0;
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
}

const giftTree = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null,
    },
    right: {
      value: "🎅",
      left: null,
      right: null,
    },
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null,
    },
  },
};

// Graphical representation of the tree:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Function call
console.log(treeHeight(giftTree));
// Returns: 3

/* 
  Score: ★★★★★
*/
