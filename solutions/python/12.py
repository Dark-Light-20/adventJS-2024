from re import search, compile


def calculate_price(ornaments: str) -> int | None:
    prices = {"*": 1, "o": 5, "^": 10, "#": 50, "@": 100}
    valid_ornaments_regex = compile(r"^[*o^#@]*$")
    if (not search(valid_ornaments_regex, ornaments)):
        return None
    total = 0
    for i in range(len(ornaments)-1):
        ornament_value = prices[ornaments[i]]
        next_ornament_value = prices[ornaments[i + 1]]
        total += -ornament_value if next_ornament_value > ornament_value else ornament_value
    total += prices[ornaments[-1]]
    return total


if __name__ == "__main__":
    price1 = calculate_price("***")
    # 3   (1 + 1 + 1)
    print(price1)

    price2 = calculate_price("*o")
    # 4   (5 - 1)
    print(price2)

    price4 = calculate_price("o*")
    # 6   (5 + 1)
    print(price4)

    price5 = calculate_price("*o*")
    # 5  (-1 + 5 + 1)
    print(price5)

    price6 = calculate_price("**o*")
    # 6  (1 - 1 + 5 + 1)
    print(price6)

    price7 = calculate_price("o***")
    # 8   (5 + 3)
    print(price7)

    price8 = calculate_price("*o@")
    # 94  (-5 - 1 + 100)
    print(price8)

    price9 = calculate_price("*#")
    # 49  (-1 + 50)
    print(price9)

    price10 = calculate_price("@@@")
    # 300 (100 + 100 + 100)
    print(price10)

    price11 = calculate_price("#@")
    # 50  (-50 + 100)
    print(price11)

    price12 = calculate_price("#@Z")
    # undefined (Z is unknown)
    print(price12)

"""
  Score: ★★★★★
"""
