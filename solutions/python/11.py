def decode_filename(filename: str) -> str:
    file_part_start_index = filename.find("_") + 1
    file_part = filename[file_part_start_index:]
    file_name_last_index = file_part.rfind(".")
    return file_part[:file_name_last_index]


if __name__ == "__main__":
    file1 = decode_filename("2023122512345678_sleighDesign.png.grinchwa")
    print(file1)
    # ➞ "sleighDesign.png"

    file2 = decode_filename("42_chimney_dimensions.pdf.hack2023")
    print(file2)
    # ➞ "chimney_dimensions.pdf"

    file3 = decode_filename("987654321_elf-roster.csv.tempfile")
    print(file3)
    # ➞ "elf-roster.csv"

"""
  Score: ★★★★★
"""
