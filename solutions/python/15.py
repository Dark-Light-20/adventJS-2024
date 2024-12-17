def draw_table(data: list[dict[str, str | int]]) -> str:
    table = ""
    columns_names = list(data[0].keys())
    columns_length = {}
    for item in data:
        for column in columns_names:
            columns_length.setdefault(column, len(column))
            item_length = len(str(item[column]))
            if (item_length > columns_length[column]):
                columns_length[column] = item_length
    row_separator = "+"
    for column_size in columns_length.values():
        row_separator += "-"*(column_size+2)+"+"
    table += f"{row_separator}\n|"
    for name in columns_names:
        table += " "
        first_letter = name[0]
        table += first_letter.upper()
        table += name[1:].ljust(columns_length[name]-1)
        table += " |"
    table += f"\n{row_separator}\n"
    for item in data:
        table += "|"
        for name in columns_names:
            table += " "
            value = str(item[name])
            table += value.ljust(columns_length[name])
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
