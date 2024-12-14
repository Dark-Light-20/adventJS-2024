from functools import reduce


def min_moves_to_stables(reindeer, stables):
    moves = 0
    stables_set = set(stables)

    for pos in reindeer:
        actual_stables_array = list(stables_set)

        def get_min_moves_data(moves_data, stable):
            movement = abs(pos - stable)
            return [movement, stable] if movement < moves_data[0] else moves_data

        min_moves_data = reduce(get_min_moves_data, actual_stables_array[1:], [
                                abs(pos - actual_stables_array[0]), actual_stables_array[0]])
        moves += min_moves_data[0]
        stables_set.discard(min_moves_data[1])

    return moves


if __name__ == "__main__":
    moves1 = min_moves_to_stables([2, 6, 9], [3, 8, 5])  # -> 3
    print(moves1)
    # Explanation:
    # Reindeer at positions: 2, 6, 9
    # Stables at positions: 3, 8, 5
    # 1st reindeer: moves from position 2 to the stable at position 3 (1 move).
    # 2nd reindeer: moves from position 6 to the stable at position 5 (1 move)
    # 3rd reindeer: moves from position 9 to the stable at position 8 (1 move).
    # Total moves: 1 + 1 + 1 = 3 moves

    moves2 = min_moves_to_stables([1, 1, 3], [1, 8, 4])
    print(moves2)
    # Explanation:
    # Reindeer at positions: 1, 1, 3
    # Stables at positions: 1, 8, 4
    # 1st reindeer: does not move (0 moves)
    # 2nd reindeer: moves from position 1 to the stable at position 4 (3 moves)
    # 3rd reindeer: moves from position 3 to the stable at position 8 (5 moves)
    # Total moves: 0 + 3 + 5 = 8 moves

"""
  Score: ★★★★★
"""
