def detect_bombs(grid: list[list[bool]]) -> list[list[int]]:
    mines_grid = []
    i = 0
    while (i < len(grid)):
        mines_grid.append([])
        j = 0
        while (j < len(grid[i])):
            mines_grid[i].append(0)
            counter = 0
            for x in [-1, 0, 1]:
                for y in [-1, 0, 1]:
                    row_index = i+x
                    cell_index = j+y
                    if (x == 0 and y == 0):
                        continue
                    if (
                        row_index >= 0 and
                        row_index < len(grid) and
                        cell_index >= 0 and
                        cell_index < len(grid[i]) and
                        grid[row_index][cell_index]
                    ):
                        counter += 1
            mines_grid[i][j] = counter
            j += 1
        i += 1
    return mines_grid


if __name__ == "__main__":
    bombs1 = detect_bombs([
        [True, False, False],
        [False, True, False],
        [False, False, False],
    ])
    print(bombs1)
    # [
    #   [1, 2, 1],
    #   [2, 1, 1],
    #   [1, 1, 1]
    # ]

    bombs2 = detect_bombs([
        [True, False],
        [False, False],
    ])
    print(bombs2)
    # [
    #   [0, 1],
    #   [1, 1]
    # ]

    bombs3 = detect_bombs([
        [True, True],
        [False, False],
        [True, True],
    ])
    print(bombs3)
    # [
    #   [1, 1],
    #   [4, 4],
    #   [1, 1]
    # ]

"""
  Score: ★★★★★
"""
