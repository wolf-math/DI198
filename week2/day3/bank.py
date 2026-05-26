class BankAccount:
    account_number = 1 # class attribute
    def __init__(self, balance=0):
        # sets the account number to the class attribute value
        self.account_number = BankAccount.account_number
        self.balance = balance
        # increases the class attribute value by one
        BankAccount.account_number += 1


nate = BankAccount(7000)
joe = BankAccount(8000)

print(nate.account_number)
print(joe.account_number)