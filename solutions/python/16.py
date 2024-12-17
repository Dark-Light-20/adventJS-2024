def remove_snow(s: str) -> str:
    pile = []
    for snow in s:
        if (len(pile) and snow == pile[-1]):
            pile.pop()
            continue
        pile.append(snow)
    return "".join(pile)


if __name__ == "__main__":
    snow1 = remove_snow("zxxzoz")  # -> "oz"
    print(snow1)
    # 1. Remove "xx", resulting in "zzoz"
    # 2. Remove "zz", resulting in "oz"

    snow2 = remove_snow("abcdd")  # -> "abc"
    print(snow2)
    # 1. Remove "dd", resulting in "abc"

    snow3 = remove_snow("zzz")  # -> "z"
    print(snow3)
    # 1. Remove "zz", resulting in "z"

    snow4 = remove_snow("a")  # -> "a"
    print(snow4)
    # No duplicate piles

"""
  Score: ★★★★★
"""
