type TreeNode = { value: string; left?: any; right?: any };

function isTreesSynchronized(
  tree1: TreeNode,
  tree2: TreeNode
): [boolean, string] {
  function validateSync(node1: TreeNode, node2: TreeNode): boolean {
    let subSync1 = true;
    let subSync2 = true;
    if (node1.left && node2.right) {
      subSync1 = validateSync(node1.left, node2.right);
    }
    if (node1.right && node2.left) {
      subSync2 = validateSync(node1.right, node2.left);
    }
    const sameRoot = node1.value === node2.value;
    return sameRoot && subSync1 && subSync2;
  }
  const sync = validateSync(tree1, tree2);
  const firstRoot = tree1.value;
  return [sync, firstRoot];
}

const stree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const stree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};

const sync1 = isTreesSynchronized(stree1, stree2); // [true, '🎄']
console.log(sync1);

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const stree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};

const sync2 = isTreesSynchronized(stree1, stree3); // [false, '🎄']
console.log(sync2);

const stree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const sync3 = isTreesSynchronized(stree1, stree4); // [false, '🎄']
console.log(sync3);

const sync4 = isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" }); // [false, '🎅']
console.log(sync4);

/* 
  Score: ★★★★★
*/
