function fixPackages(packages: string): string {
  const data: string[][] = [[]];
  let actualNesting = 0;
  for (const item of packages) {
    if (item === "(") {
      actualNesting++;
      data.push([]);
    } else if (item === ")") {
      const reversed = data[actualNesting].reverse();
      data[actualNesting] = [];
      actualNesting--;
      data[actualNesting].push(...reversed);
    } else {
      data[actualNesting].push(item);
    }
  }
  return data[0].join("");
}

const package1 = fixPackages("a(cb)de");
console.log(package1);
// ➞ "abcde"
// We reverse "cb" inside the parentheses

const package2 = fixPackages("a(bc(def)g)h");
console.log(package2);
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

const package3 = fixPackages("abc(def(gh)i)jk");
console.log(package3);
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

const package4 = fixPackages("a(b(c))e");
console.log(package4);
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"

/* 
  Score: ★★★★
*/
