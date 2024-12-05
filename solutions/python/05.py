def organizeShoes(shoes):
    sizes = {}
    result = []
    for shoe in shoes:
        sizes.setdefault(shoe["size"], {"I": 0, "R": 0, "size": shoe["size"]})
        sizes[shoe["size"]][shoe["type"]] += 1
    for item in sizes.values():
        while (item["I"] > 0 and item["R"] > 0):
            item["I"] -= 1
            item["R"] -= 1
            result.append(item["size"])
    return result


if __name__ == "__main__":
    shoes = [
        {"type": "I", "size": 38},
        {"type": "R", "size": 38},
        {"type": "R", "size": 42},
        {"type": "I", "size": 41},
        {"type": "I", "size": 42},
    ]
    result1 = organizeShoes(shoes)
    print(result1)
    # [38, 42]

    shoes2 = [
        {"type": "I", "size": 38},
        {"type": "R", "size": 38},
        {"type": "I", "size": 38},
        {"type": "I", "size": 38},
        {"type": "R", "size": 38},
    ]
    result2 = organizeShoes(shoes2)
    print(result2)
    # [38, 38]

    shoes3 = [
        {"type": "I", "size": 38},
        {"type": "R", "size": 36},
        {"type": "R", "size": 42},
        {"type": "I", "size": 41},
        {"type": "I", "size": 42},
    ]
    result3 = organizeShoes(shoes3)
    print(result3)
    # [42]

"""
  Score: ★★★★★
"""
