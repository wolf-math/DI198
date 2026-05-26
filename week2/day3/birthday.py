# Try to create a countdown to your birthday !

# For example : "My birthday is in 45 days, and 10:29:46"

from datetime import datetime, timedelta

my_birthday = (19, 6)
now = datetime.now()

next_birthday_year = now.year
if now.month > my_birthday[1] and now.day > my_birthday[0]:
    next_birthday_year += 1

next_birthday_date = datetime.strptime(f"{my_birthday[0]}/{my_birthday[1]}/{next_birthday_year}", "%d/%m/%Y")

months_to_bday = next_birthday_date.month - now.month
days_to_bday = next_birthday_date.day - now.day
hours_to_bday = next_birthday_date.hour - now.hour
minutes_to_bday = next_birthday_date.minute - now.minute

time_to_bday = next_birthday_date - now

print(f"My birthday is in {time_to_bday.days} days {time_to_bday.seconds // 60} minutes.")
