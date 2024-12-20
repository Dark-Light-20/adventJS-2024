def distribute_weight(weight: int) -> str:
    box_parts = {
        "1": [" _ ", "|_|"],
        "2": [" ___ ", "|___|"],
        "5": [" _____ ", "|     |", "|_____|"],
        "10": [" _________ ", "|         |", "|_________|"]
    }
    used_boxes = {"1": 0, "2": 0, "5": 0, "10": 0}
    result = ""
    remainder = weight
    piled_boxes = []
    for size in reversed(used_boxes.keys()):
        quantity = remainder // int(size)
        for _ in range(quantity):
            piled_boxes.insert(0, size)
        used_boxes[size] = quantity
        remainder = remainder % int(size)
    result += "\n".join(box_parts[piled_boxes[0]])
    for i in range(len(piled_boxes))[1:]:
        previous_box = piled_boxes[i-1]
        box = piled_boxes[i]
        if (previous_box != box):
            start_box_cover_index = len(box_parts[previous_box][-1])
            result += box_parts[box][0][start_box_cover_index:-1]
        result += "\n"
        result += "\n".join(box_parts[box][1:])
    return result


if __name__ == "__main__":
    weights1 = distribute_weight(1)
    print(weights1)
    # Returns:
    #  _
    # |_|

    weights2 = distribute_weight(2)
    print(weights2)
    # Returns:
    #  ___
    # |___|

    weights3 = distribute_weight(3)
    print(weights3)
    # Returns:
    #  _
    # |_|_
    # |___|

    weights4 = distribute_weight(4)
    print(weights4)
    # Returns:
    #  ___
    # |___|
    # |___|

    weights5 = distribute_weight(5)
    print(weights5)
    # Returns:
    #  _____
    # |     |
    # |_____|

    weights6 = distribute_weight(6)
    print(weights6)
    # Returns:
    #  _
    # |_|___
    # |     |
    # |_____|

"""
  Score: # TODO: Code triggers error in web page
"""
