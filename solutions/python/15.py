def draw_table(data: list[dict[str, str | int]]) -> str:
    table = ""
    cols_names = list(data[0].keys())
    cols_size = {}
    for item in data:
        for column in cols_names:
            cols_size.setdefault(column, len(column))
            item_size = len(str(item[column]))
            if (item_size > cols_size[column]):
                cols_size[column] = item_size
    row_sep = "+"
    for col_size in cols_size.values():
        row_sep += "-"*(col_size+2)+"+"
    table += f"{row_sep}\n|"
    for name in cols_names:
        table += " "
        first_letter = name[0]
        table += first_letter.upper()
        table += name[1:].ljust(cols_size[name]-1)
        table += " |"
    table += f"\n{row_sep}\n"
    for item in data:
        table += "|"
        for name in cols_names:
            table += " "
            value = str(item[name])
            table += value.ljust(cols_size[name])
            table += " |"
        table += "\n"
    table += row_sep
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
  Score: ★★★★★
"""
