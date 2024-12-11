function decodeFilename(filename: string): string {
  const filePartStartIndex = filename.indexOf("_") + 1;
  const filePart = filename.slice(filePartStartIndex);
  const fileNameLastIndex = filePart.lastIndexOf(".");
  return filePart.slice(0, fileNameLastIndex);
}

const file1 = decodeFilename("2023122512345678_sleighDesign.png.grinchwa");
console.log(file1);
// ➞ "sleighDesign.png"

const file2 = decodeFilename("42_chimney_dimensions.pdf.hack2023");
console.log(file2);
// ➞ "chimney_dimensions.pdf"

const file3 = decodeFilename("987654321_elf-roster.csv.tempfile");
console.log(file3);
// ➞ "elf-roster.csv"

/* 
  Score: ★★★★★
*/
