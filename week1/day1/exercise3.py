# Check what is the type of each value, then change it: if it is a string, make it an integer and vice-versa:

bank_balance = '33000'
bank_type = type(bank_balance) # string
bank_int = int(bank_balance) # 33000

print(bank_type)
print(bank_int)

phone_number = 532287514
phone_type = type(phone_number) # int
phone_str = str(phone_number)

print(phone_type)
print(phone_str)

print(type(phone_str))

