def distribute_weight(weight: int) -> str:
    box_sizes = {
        10: [" _________ ", "|         |", "|_________|"],
        5: [" _____ ", "|     |", "|_____|"],
        2: [" ___ ", "|___|"],
        1: [" _ ", "|_|"]
    }
    box_counts = {}
    for size in box_sizes.keys():
        box_counts[size] = weight // size
        weight %= size
    boxes_list = []
    for size, quantity in box_counts.items():
        boxes_list = [size]*quantity + boxes_list
    result = ""
    result += "\n".join(box_sizes[boxes_list[0]])
    for i in range(len(boxes_list))[1:]:
        previous_box = boxes_list[i-1]
        box = boxes_list[i]
        if (previous_box != box):
            start_box_cover_index = len(box_sizes[previous_box][-1])
            result += box_sizes[box][0][start_box_cover_index:-1]
        result += "\n"
        result += "\n".join(box_sizes[box][1:])
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
