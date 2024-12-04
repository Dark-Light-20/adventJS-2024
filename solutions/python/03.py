def organizeInventory(inventory):
    ordedInventory = {}

    for item in inventory:
        ordedInventory.setdefault(item["category"], {})
        ordedInventory[item["category"]].setdefault(item["name"], 0)
        ordedInventory[item["category"]][item["name"]] += item["quantity"]

    return ordedInventory


if __name__ == "__main__":
    inventary = [
        {"name": "doll", "quantity": 5, "category": "toys"},
        {"name": "car", "quantity": 3, "category": "toys"},
        {"name": "ball", "quantity": 2, "category": "sports"},
        {"name": "car", "quantity": 2, "category": "toys"},
        {"name": "racket", "quantity": 4, "category": "sports"},
    ]
    result1 = organizeInventory(inventary)
    print(result1)

    # Expected result:
    # {
    #   toys: {
    #     doll: 5,
    #     car: 5
    #   },
    #   sports: {
    #     ball: 2,
    #     racket: 4
    #   }

    inventary2 = [
        {"name": "book", "quantity": 10, "category": "education"},
        {"name": "book", "quantity": 5, "category": "education"},
        {"name": "paint", "quantity": 3, "category": "art"},
    ]
    result2 = organizeInventory(inventary2)
    print(result2)

    # Expected result:
    # {
    #   education: {
    #     book: 15
    #   },
    #   art: {
    #     paint: 3
    #   }
    # }

"""
  Score: ★★★★★
"""
