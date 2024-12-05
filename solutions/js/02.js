function createFrame(names) {
  const orderedNames = [...names].sort((a, b) => a.length - b.length);
  const longestName = orderedNames[orderedNames.length - 1];
  const drawLength = longestName.length + 1;
  const frameBorder = "*".repeat(2 + drawLength + 1);
  let frame = "";
  frame += frameBorder + "\n";
  names.forEach((name) => (frame += `* ${name.padEnd(drawLength)}*\n`));
  frame += frameBorder;
  return frame;
}

const frame1 = createFrame(["midu", "madeval", "educalvolpz"]);
console.log(frame1);
// Expected result:
/*
 ***************
 * midu        *
 * madeval     *
 * educalvolpz *
 ***************
 */

const frame2 = createFrame(["midu"]);
console.log(frame2);
// Expected result:
/*
 ********
 * midu *
 ********
 */

const frame3 = createFrame(["a", "bb", "ccc"]);
console.log(frame3);
// Expected result:
/*
 *******
 * a   *
 * bb  *
 * ccc *
 *******
 */

const frame4 = createFrame(["a", "bb", "ccc", "dddd"]);
console.log(frame4);

/* 
  Score: ★★★★★
*/
