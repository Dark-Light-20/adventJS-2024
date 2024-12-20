def fix_gift_list(received: list[str], expected: list[str]) -> dict[str, int]:
    received_object = {}
    expected_object = {}
    result = {"missing": {}, "extra": {}}
    for gift in received:
        received_object.setdefault(gift, 0)
        received_object[gift] += 1
    for gift in expected:
        expected_object.setdefault(gift, 0)
        expected_object[gift] += 1
    for gift, quantity in expected_object.items():
        received_object.setdefault(gift, 0)
        received_object[gift] -= quantity
        remain_quantity = received_object[gift]
        if (remain_quantity > 0):
            result["extra"][gift] = remain_quantity
        elif (remain_quantity < 0):
            result["missing"][gift] = -remain_quantity
    for gift, quantity in received_object.items():
        if (not result["extra"].get(gift) and quantity > 0):
            result["extra"][gift] = quantity
    return result


if __name__ == "__main__":
    gifts1 = fix_gift_list(
        ["puzzle", "car", "doll", "car"],
        ["car", "puzzle", "doll", "ball"]
    )
    print(gifts1)
    # Returns:
    # {
    #   missing: { ball: 1 },
    #   extra: { car: 1 }
    # }

    gifts2 = fix_gift_list(
        ["book", "train", "kite", "train"],
        ["train", "book", "kite", "ball", "kite"]
    )
    print(gifts2)
    # Returns:
    # {
    #   missing: { ball: 1, kite: 1 },
    #   extra: { train: 1 }
    # }

    gifts3 = fix_gift_list(
        ["bear", "bear", "car"],
        ["bear", "car", "puzzle", "bear", "car", "car"]
    )
    print(gifts3)
    # Returns:
    # {
    #   missing: { puzzle: 1, car: 2 },
    #   extra: {}
    # }

    gifts4 = fix_gift_list(["bear", "bear", "car"], ["car", "bear", "bear"])
    print(gifts4)
    # Returns:
    # {
    #   missing: {},
    #   extra: {}
    # }

    gifts5 = fix_gift_list(
        ["puzzle", "car", "doll", "car", "test"],
        ["car", "puzzle", "doll", "ball"]
    )
    print(gifts5)
    # Returns:
    # {
    #   missing: { ball: 1 },
    #   extra: { car: 1, test: 1 }
    # }

"""
  Score: ★★★★★
"""
