def find_missing_numbers(nums):
    number_list = set(nums)
    limit = max(nums)
    full_list = set(range(limit)[1:])
    return full_list - number_list


if __name__ == "__main__":
    missing_1 = find_missing_numbers([1, 2, 4, 6])
    print(missing_1)
    # [3, 5]

    missing_2 = find_missing_numbers([4, 8, 7, 2])
    print(missing_2)
    # [1, 3, 5, 6]

    missing_3 = find_missing_numbers([3, 2, 1, 1])
    print(missing_3)
    # []

    missing_4 = find_missing_numbers([5, 5, 5, 3, 3, 2, 1])
    print(missing_4)
    # [4]

"""
  Score: ★★★★
"""
