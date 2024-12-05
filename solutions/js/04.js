function createXmasTree(height, ornament) {
  let tree = "";
  for (let i = 0; i < height; i++) {
    const spaces = "_".repeat(height - i - 1);
    const treePart = ornament.repeat((i + 1) * 2 - 1);
    tree += spaces + treePart + spaces + "\n";
  }
  const trunkSpace = "_".repeat(height - 1);
  const trunk = trunkSpace + "#" + trunkSpace;
  tree += trunk + "\n" + trunk;
  return tree;
}

const tree = createXmasTree(5, "*");
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/

/* 
  Score: ★★★★★
*/
