def fix_packages(packages):
    data = [[]]
    actual_nesting = 0
    for item in packages:
        if (item == "("):
            actual_nesting += 1
            data.append([])
        elif (item == ")"):
            reversed_data = list(reversed(data[actual_nesting]))
            data[actual_nesting] = []
            actual_nesting -= 1
            data[actual_nesting].extend(reversed_data)
        else:
            data[actual_nesting].append(item)
    return "".join(data[0])


if __name__ == "__main__":
    package1 = fix_packages("a(cb)de")
    print(package1)
    # ➞ "abcde"
    # We reverse "cb" inside the parentheses

    package2 = fix_packages("a(bc(def)g)h")
    print(package2)
    # ➞ "agdefcbh"
    # 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

    package3 = fix_packages("abc(def(gh)i)jk")
    print(package3)
    # ➞ "abcighfedjk"
    # 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

    package4 = fix_packages("a(b(c))e")
    print(package4)
    # ➞ "acbe"
    # 1st we reverse "c" → "c", then "bc" → "cb"

"""
  Score: ★★★★★
"""
