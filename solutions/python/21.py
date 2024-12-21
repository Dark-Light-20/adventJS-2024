def tree_height(tree):
    if (not isinstance(tree, dict)):
        return 0
    left = tree_height(tree.get("left"))
    right = tree_height(tree.get("right"))
    return 1+max(left, right)


if __name__ == "__main__":
    gift_tree = {
        "value": "🎁",
        "left": {
            "value": "🎄",
            "left": {
                "value": "⭐",
                "left": None,
                "right": None,
            },
            "right": {
                "value": "🎅",
                "left": None,
                "right": None,
            },
        },
        "right": {
            "value": "❄️",
            "left": None,
            "right": {
                "value": "🦌",
                "left": None,
                "right": None,
            },
        },
    }

    # Graphical representation of the tree:
    #        🎁
    #       /   \
    #     🎄     ❄️
    #    /  \      \
    #  ⭐   🎅      🦌

    # Function call
    print(tree_height(gift_tree))
    # Returns: 3

"""
  Score: ★★★★★
"""
