# Try to create a countdown to your birthday !

# For example : "My birthday is in 45 days, and 10:29:46"

from datetime import datetime

def parse_time(time_obj):
    days = time_obj.days
    hours, remainder = divmod(time_obj.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    return (days, hours, minutes, seconds)


def birthday_countdown(day, month):
    now = datetime.now()

    next_birthday_year = now.year
    if now.month > month and now.day > day:
        next_birthday_year += 1

    next_birthday_date = datetime.strptime(f"{day}/{month}/{next_birthday_year}", "%d/%m/%Y")

    return next_birthday_date - now


def main():
    user_month = int(input("What is your birthday month? (number) "))
    user_day = int(input("What day of the month is your birthday? (number) "))

    countdown = birthday_countdown(user_day, user_month)

    days, hours, minutes, seconds = parse_time(countdown)

    print(f"Birthday is in {days} days, {hours} hours, {minutes} minutes, and {seconds} seconds.")

main()