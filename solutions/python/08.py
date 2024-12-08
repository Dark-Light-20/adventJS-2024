def draw_race(indices, length):
    result = ""
    for i, item in enumerate(indices):
        race_line = ""
        if (item < 0):
            race_line = "~" * (length+item) + "r" + "~" * (-item-1)
        elif (item > 0):
            race_line = "~" * (item) + "r" + "~" * (length-item-1)
        else:
            race_line = "~" * length
        result += " " * (len(indices)-i-1)+race_line + f" /{i+1}\n"
    return result[:-1]


if __name__ == "__main__":
    race1 = draw_race([0, 5, -3], 10)
    print(race1)
    """
    ~~~~~~~~~~ /1
    ~~~~~r~~~~ /2
    ~~~~~~~r~~ /3
    """

    race2 = draw_race([2, -1, 0, 5], 8)
    print(race2)
    """
    ~~r~~~~~ /1
    ~~~~~~~r /2
    ~~~~~~~~ /3
    ~~~~~r~~ /4
    """

    race3 = draw_race([3, 7, -2], 12)
    print(race3)
    """
    ~~~r~~~~~~~~ /1
    ~~~~~~~~r~~~ /2
    ~~~~~~~~~r~~ /3
    """

"""
  Score: ★★★★★
"""
