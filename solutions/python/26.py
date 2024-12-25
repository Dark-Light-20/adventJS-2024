from datetime import datetime


def get_completed(time_worked: str, total_time: str) -> str:
    date_time = datetime.fromisoformat("2024-12-25T00:00:00").timestamp()
    time_worked_value = date_time - \
        datetime.fromisoformat(f"2024-12-25T{time_worked}").timestamp()
    total_time_value = date_time - \
        datetime.fromisoformat(f"2024-12-25T{total_time}").timestamp()
    percentage_value = (time_worked_value*100)/total_time_value
    percentage = round(percentage_value)
    return f"{percentage}%"


if __name__ == "__main__":
    completed_1 = get_completed("01:00:00", "03:00:00")  # 33%
    print(completed_1)

    completed_2 = get_completed("02:00:00", "04:00:00")  # 50%
    print(completed_2)

    completed_3 = get_completed("01:00:00", "01:00:00")  # 100%
    print(completed_3)

    completed_4 = get_completed("00:10:00", "01:00:00")  # 17%
    print(completed_4)

    completed_5 = get_completed("01:10:10", "03:30:30")  # 33%
    print(completed_5)

    completed_6 = get_completed("03:30:30", "05:50:50")  # 60%
    print(completed_6)

"""
  Score: ★★★★★
"""
