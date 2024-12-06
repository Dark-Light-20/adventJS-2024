/**
 * @param {string[]} gifts
 * @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  // Present needs to be inside the limits of the box,
  // so we need to validate if `*` is present in the sub-box
  return !!box.slice(1, -1).find((row) => row.slice(1, -1).includes("*"));
}

const box1 = inBox(["###", "#*#", "###"]); // ➞ true
console.log(box1);

const box2 = inBox(["####", "#* #", "#  #", "####"]); // ➞ true
console.log(box2);

const box3 = inBox(["*####", "#   #", "#  #*", "####"]); // ➞ false
console.log(box3);

const box4 = inBox(["#####", "#   #", "#   #", "#   #", "#####"]); // ➞ false
console.log(box4);

/* 
  Score: ★★★★★
*/
