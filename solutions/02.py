def createFrame(names):
    orderedNames = sorted(names, key=lambda name: len(name))
    longestName = orderedNames[-1]
    drawLength = len(longestName) + 1
    frameBorder = "*" * (2 + drawLength + 1)
    frame = ""
    frame += frameBorder + "\n"
    for name in names:
        frame += f"* {name.ljust(drawLength)}*\n"
    frame += frameBorder
    return frame


if __name__ == "__main__":
    frame1 = createFrame(["midu", "madeval", "educalvolpz"])
    print(frame1)
    # Expected result:
    """
    ***************
    * midu        *
    * madeval     *
    * educalvolpz *
    ***************
    """

    frame2 = createFrame(["midu"])
    print(frame2)
    # Expected result:
    """
    ********
    * midu *
    ********
    """

    frame3 = createFrame(["a", "bb", "ccc"])
    print(frame3)
    # Expected result:
    """
    *******
    * a   *
    * bb  *
    * ccc *
    *******
    """

    frame4 = createFrame(["a", "bb", "ccc", "dddd"])
    print(frame4)

"""
  Score: ★★★★★
"""
