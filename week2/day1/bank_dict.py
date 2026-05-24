# bad stuff here!

aaron = {
    "account_number" : 1,
    "balance": 150,
    "transactions": []
}

yaakov = {
    "account_number" : 1,
    "balance": 7500,
    "transactions": []
}


ariel = {
    "account_num": 2
}

def withdraw(bank, amount):
    if amount > bank["balance"]:
        print("insufficient funds")
    else:
        bank["balance"] = bank["balance"] - amount

