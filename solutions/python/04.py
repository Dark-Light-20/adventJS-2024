def createXmasTree(height, ornament):
    tree = ""
    for i in range(height):
        spaces = "_" * (height - i - 1)
        treePart = ornament * ((i + 1) * 2 - 1)
        tree += spaces + treePart + spaces + "\n"
    trunkSpace = "_" * (height - 1)
    trunk = trunkSpace + "#" + trunkSpace
    tree += trunk + "\n" + trunk
    return tree


if __name__ == "__main__":
    tree = createXmasTree(5, "*")
    print(tree)
    """
    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____
    """

    tree2 = createXmasTree(3, "+")
    print(tree2)
    """
    __+__
    _+++_
    +++++
    __#__
    __#__
    """

    tree3 = createXmasTree(6, "@")
    print(tree3)
    """
    _____@_____
    ____@@@____
    ___@@@@@___
    __@@@@@@@__
    _@@@@@@@@@_
    @@@@@@@@@@@
    _____#_____
    _____#_____
    """

"""
  Score: ★★★★★
"""
