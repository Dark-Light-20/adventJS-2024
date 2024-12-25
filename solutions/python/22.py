def generate_gift_sets(gifts):
    result = []

    def generate_combinations(arr, size, start, temp):
        if (len(temp) == size):
            result.append([*temp])
            return
        i = start
        while (i < len(arr)):
            temp.append(arr[i])
            generate_combinations(arr, size, i+1, temp)
            temp.pop()
            i += 1
    for i in range(len(gifts)+1)[1:]:
        generate_combinations(gifts, i, 0, [])
    return result


if __name__ == "__main__":
    gifts_set_1 = generate_gift_sets(["car", "doll", "puzzle"])
    print(gifts_set_1)
    # [
    #   ['car'],
    #   ['doll'],
    #   ['puzzle'],
    #   ['car', 'doll'],
    #   ['car', 'puzzle'],
    #   ['doll', 'puzzle'],
    #   ['car', 'doll', 'puzzle']
    # ]

    gifts_set_2 = generate_gift_sets(["ball"])
    print(gifts_set_2)
    # [
    #   ['ball']
    # ]

    gifts_set_3 = generate_gift_sets(["game", "pc"])
    print(gifts_set_3)
    # [
    #   ['game'],
    #   ['pc'],
    #   ['game', 'pc']
    # ]

"""
  Score: ★★★★★
"""
