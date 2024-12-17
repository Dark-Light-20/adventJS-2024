function drawTable(data: Array<Record<string, string | number>>): string {
  let table = "";
  const columnsNames = Object.keys(data[0]);
  const columnsLength: Record<string, number> = {};
  for (const item of data) {
    for (const name of columnsNames) {
      columnsLength[name] ??= name.length;
      const itemLength = item[name].toString().length;
      columnsLength[name] = Math.max(itemLength, columnsLength[name]);
    }
  }
  let rowSeparator = "+";
  for (const colSize of Object.values(columnsLength)) {
    rowSeparator += `${"-".repeat(colSize + 2)}+`;
  }
  table += `${rowSeparator}\n|`;
  for (const name of columnsNames) {
    table += ` ${name[0].toUpperCase()}${name
      .substring(1)
      .padEnd(columnsLength[name] - 1)} |`;
  }
  table += `\n${rowSeparator}\n`;
  for (const item of data) {
    table += `|${Object.values(item).reduce(
      (line, value, index) =>
        `${line} ${value
          .toString()
          .padEnd(Object.values(columnsLength)[index])} |`,
      ""
    )}\n`;
  }
  table += `${rowSeparator}`;
  return table;
}

const table1 = drawTable([
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
]);
console.log(table1);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

const table2 = drawTable([
  { gift: "Doll", quantity: 10 },
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 },
]);
console.log(table2);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+

/* 
  Score: ★★★★
*/
