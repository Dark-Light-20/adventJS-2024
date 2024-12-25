def execute(code: str) -> int:
    value = 0
    instruction_index = 0
    loop_index = 0
    while (instruction_index < len(code)):
        instruction = code[instruction_index]
        if (instruction == "+"):
            value += 1
        elif (instruction == "-"):
            value -= 1
        elif (instruction == "["):
            loop_index = instruction_index
            if (value == 0):
                instruction_index = code.find("]", instruction_index)
        elif (instruction == "]" and value != 0):
            instruction_index = loop_index
        elif (instruction == "{" and value == 0):
            instruction_index = code.find("}", instruction_index)
        instruction_index += 1
    return value


if __name__ == "__main__":
    code_1 = execute("+++")  # 3
    print(code_1)

    code_2 = execute("+--")  # -1
    print(code_2)

    code_3 = execute(">+++[-]")  # 0
    print(code_3)

    code_4 = execute(">>>+{++}")  # 3
    print(code_4)

    code_5 = execute("+{[-]+}+")  # 2
    print(code_5)

    code_6 = execute("{+}{+}{+}")  # 0
    print(code_6)

    code_7 = execute("------[+]++")  # 2
    print(code_7)

    code_8 = execute("-[++{-}]+{++++}")  # 5
    print(code_8)

"""
  Score: ★★★★★
"""
