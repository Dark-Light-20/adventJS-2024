function drawTable(data: Array<Record<string, string | number>>): string {
  let table = "";
  const columnsNames = Object.keys(data[0]);
  const columnsValues = data.reduce((acc, item) => {
    columnsNames.forEach((column) => {
      acc[column] ??= [];
      acc[column].push(item[column].toString());
    });
    return acc;
  }, {} as Record<string, string[]>);
  const columnsLength = columnsNames.map(
    (column) =>
      [column, ...columnsValues[column]].sort((a, b) => b.length - a.length)[0]
        .length
  );
  const rowSeparator = `+${columnsLength.reduce(
    (line, colSize) => `${line}${"-".repeat(colSize + 2)}+`,
    ""
  )}`;
  table += `${rowSeparator}\n`;
  table += `|${columnsNames.reduce(
    (acc, column, index) =>
      `${acc} ${column[0].toUpperCase()}${column
        .slice(1)
        .padEnd(columnsLength[index] - 1, " ")} |`,
    ""
  )}\n`;
  table += `${rowSeparator}\n`;
  table += data.reduce(
    (line, item) =>
      `${line}|${columnsNames.reduce(
        (itemAcc, column, index) =>
          `${itemAcc} ${item[column]
            .toString()
            .padEnd(columnsLength[index], " ")} |`,
        ""
      )}\n`,
    ""
  );
  table += rowSeparator;
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
