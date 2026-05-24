class BankAccount:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)


# ===============================================

people_list = [
    {"user": "Vasili", "balance": 29345},
    {"user": "Yaakov", "balance": 29345},
    {"user": "nate", "balance": 29345},
    {"user": "Ariel", "balance": 29345},
]

for i, person in enumerate(people_list):
    person["account_info"] = BankAccount(i, person["balance"])


print(people_list[3]["account_info"].withdraw(600))
print(people_list[3]["account_info"].deposit(1000))
print(people_list[3]["account_info"].view_transactions())


