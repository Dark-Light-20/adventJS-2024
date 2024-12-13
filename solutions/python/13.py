def is_robot_back(moves: str) -> bool | list[int]:
    instructions = list(moves)
    movements = {"L": [-1, 0], "R": [1, 0], "U": [0, 1], "D": [0, -1]}
    inverted_movements = {"L": "R", "R": "L", "U": "D", "D": "U"}
    pos = [0, 0]
    actual_move_index = 0
    while (actual_move_index < len(instructions)):
        move = instructions[actual_move_index]
        if (move == "*"):
            move = instructions[actual_move_index + 1]
        elif (move == "!"):
            actual_move_index += 1
            instructions[actual_move_index] = inverted_movements[instructions[actual_move_index]]
            move = instructions[actual_move_index]
        elif (move == "?"):
            actual_move_index += 1
            move = instructions[actual_move_index]
            if move in instructions[:actual_move_index-1]:
                actual_move_index += 1
                continue
        pos[0] += movements[move][0]
        pos[1] += movements[move][1]
        actual_move_index += 1
    return (pos[0] == 0 and pos[1] == 0) or pos


if __name__ == "__main__":
    print(is_robot_back("R"))  # [1, 0]
    print(is_robot_back("RL"))  # true
    print(is_robot_back("RLUD"))  # true
    print(is_robot_back("*RU"))  # [2, 1]
    print(is_robot_back("R*U"))  # [1, 2]
    print(is_robot_back("LLL!R"))  # [-4, 0]
    print(is_robot_back("R?R"))  # [1, 0]
    print(is_robot_back("U?D"))  # true
    print(is_robot_back("R!L"))  # [2,0]
    print(is_robot_back("U!D"))  # [0,2]
    print(is_robot_back("R?L"))  # true
    print(is_robot_back("U?U"))  # [0,1]
    print(is_robot_back("*U?U"))  # [0,2]
    print(is_robot_back("U?D?U"))  # true

    # Step-by-step examples:
    print(is_robot_back("R!U?U"))  # [1,0]
    # 'R'  -> moves to the right
    # '!U' -> inverts and becomes 'D'
    # '?U' -> moves upwards, because the 'U' movement hasn't been done yet

    print(is_robot_back("UU!U?D"))  # [0,1]
    # 'U'  -> moves upwards
    # 'U'  -> moves upwards
    # '!U' -> inverts and becomes 'D'
    # '?D' -> does not move, since the 'D' movement has already been done

"""
  Score: ★★★★★
"""
