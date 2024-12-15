from re import search as re_search, compile as re_compile


def compile(instructions):
    registers = {"A": 0}
    instruction_index = 0
    registers_regex = re_compile(r"^[A-Z]+$")
    while (instruction_index < len(instructions)):
        params = instructions[instruction_index].split(" ")
        instruction = params[0]
        param1 = params[1]
        param2 = params[2] if (len(params) > 2) else None
        if (instruction == "MOV"):
            registers[param2] = int(param1) if (not re_search(
                registers_regex, param1)) else registers[param1]
        elif (instruction == "INC"):
            registers.setdefault(param1, 0)
            registers[param1] += 1
        elif (instruction == "DEC"):
            registers.setdefault(param1, 0)
            registers[param1] -= 1
        elif (instruction == "JMP" and registers[param1] == 0):
            instruction_index = int(param2)-1

        instruction_index += 1

    return registers["A"] if registers["A"] != 0 else None


if __name__ == "__main__":
    instructions = [
        "MOV -1 C",  # copies -1 to register 'C',
        "INC C",  # increments the value of register 'C'
        "JMP C 1",  # jumps to the instruction at index 1 if 'C' is 0
        "MOV C A",  # copies register 'C' to register 'A',
        "INC A",  # increments the value of register 'A'
    ]

    result = compile(instructions)  # -> 2
    print(result)

    result2 = compile([
        "MOV 2 X",
        "DEC X",
        "DEC X",
        "JMP X 1",
        "MOV X A"
    ])  # -> -2
    print(result2)

    """
    Step-by-step execution:
    0: MOV -1 C -> The register C receives the value -1
    1: INC C    -> The register C becomes 0
    2: JMP C 1  -> C is 0, jumps to the instruction at index 1
    1: INC C    -> The register C becomes 1
    2: JMP C 1  -> C is 1, the instruction is ignored
    3: MOV C A  -> Copies register C to A. Now A is 1
    4: INC A    -> The register A becomes 2
    """

"""
  Score: ★★★★★
"""
