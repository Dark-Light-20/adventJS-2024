/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let result = "";
  for (let i = 0; i < indices.length; i++) {
    let raceLine = "";
    if (indices[i] < 0) {
      raceLine =
        "~".repeat(length + indices[i]) + "r" + "~".repeat(-indices[i] - 1);
    } else if (indices[i] > 0) {
      raceLine =
        "~".repeat(indices[i]) + "r" + "~".repeat(length - indices[i] - 1);
    } else {
      raceLine = "~".repeat(length);
    }
    result += " ".repeat(indices.length - i - 1) + raceLine + ` /${i + 1}\n`;
  }
  return result.slice(0, result.length - 1);
}

const race1 = drawRace([0, 5, -3], 10);
console.log(race1);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

const race2 = drawRace([2, -1, 0, 5], 8);
console.log(race2);
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

const race3 = drawRace([3, 7, -2], 12);
console.log(race3);
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/

/* 
  Score: ★★★★★
*/
