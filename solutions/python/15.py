def draw_table(data: list[dict[str, str | int]]) -> str:
    table = ""
    columns_names = list(data[0].keys())
    columns_values = {}
    for item in data:
        for column in columns_names:
            columns_values.setdefault(column, [])
            columns_values[column].append(str(item[column]))
    columns_length = list(map(lambda column: len(sorted(
        [column, *columns_values[column]], key=lambda name: len(name), reverse=True)[0]), columns_names))
    row_separator = "+"
    for column_size in columns_length:
        row_separator += "-"*(column_size+2)+"+"
    table += f"{row_separator}\n|"
    for column_data in enumerate(columns_names):
        table += " "
        first_letter = column_data[1][0]
        table += first_letter.upper()
        table += column_data[1][1:].ljust(columns_length[column_data[0]]-1)
        table += " |"
    table += f"\n{row_separator}\n"
    for item in data:
        table += "|"
        for column_data in enumerate(columns_names):
            table += " "
            value = str(item[column_data[1]])
            table += value.ljust(columns_length[column_data[0]])
            table += " |"
        table += "\n"
    table += row_separator
    return table


if __name__ == "__main__":
    table1 = draw_table([
        {"name": "Alice", "city": "London"},
        {"name": "Bob", "city": "Paris"},
        {"name": "Charlie", "city": "New York"},
    ])
    print(table1)
    # +---------+-----------+
    # | Name    | City      |
    # +---------+-----------+
    # | Alice   | London    |
    # | Bob     | Paris     |
    # | Charlie | New York  |
    # +---------+-----------+

    table2 = draw_table([
        {"gift": "Doll", "quantity": 10},
        {"gift": "Book", "quantity": 5},
        {"gift": "Music CD", "quantity": 1},
    ])
    print(table2)
    # +----------+----------+
    # | Gift     | Quantity |
    # +----------+----------+
    # | Doll     | 10       |
    # | Book     | 5        |
    # | Music CD | 1        |
    # +----------+----------+

"""
  Score: ★★★★
"""
