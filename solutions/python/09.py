from typing import List, Literal


def move_train(board: List[str], mov: Literal['U', 'D', 'R', 'L']) -> Literal['none', 'crash', 'eat']:
    for i, row in enumerate(board):
        if '@' in row:
            row_index, col_index = i, row.find('@')
            break
    results = {"*": "eat", "·": "none"}
    movements = {'U': (-1, 0), 'D': (1, 0), 'R': (0, 1), 'L': (0, -1)}
    row_index += movements[mov][0]
    col_index += movements[mov][1]
    try:
        next_element = board[row_index][col_index]
        return results.get(next_element, "crash")
    except IndexError:
        return "crash"


if __name__ == "__main__":
    board = ["·····", "*····", "@····", "o····", "o····"]

    print(move_train(board, "U"))
    # ➞ 'eat'
    # Because the train moves up and finds a magical fruit

    print(move_train(board, "D"))
    # ➞ 'crash'
    # The train moves down and the head crashes into itself

    print(move_train(board, "L"))
    # ➞ 'crash'
    # The train moves to the left and crashes into the wall

    print(move_train(board, "R"))
    # ➞ 'none'
    # The train moves to the right and there is empty space on the right

"""
  Score: ★★★★★
"""
