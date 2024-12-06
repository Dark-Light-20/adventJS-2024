def in_box(box):
    # Present needs to be inside the limits of the box,
    # so we need to validate if `*` is present in the sub-box
    for row in box[1:-1]:
        if (row[1:-1].find("*") != -1):
            return True
    return False


if __name__ == "__main__":
    box1 = in_box(["###", "#*#", "###"])  # ➞ true
    print(box1)

    box2 = in_box(["####", "#* #", "#  #", "####"])  # ➞ true
    print(box2)

    box3 = in_box(["*####", "#   #", "#  #*", "####"])  # ➞ false
    print(box3)

    box4 = in_box(["#####", "#   #", "#   #", "#   #", "#####"])  # ➞ false
    print(box4)

"""
  Score: ★★★★★
"""
