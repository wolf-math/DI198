class BankAccount:
    def __init__(self, account_number,  balance=0):
        self.account_number = account_number
        self.__balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.__balance}")

    def __compound_interest(self):
        self.__balance = 1.003 * self.__balance

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.__balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.__balance:
            print("Insufficient Funds")
        else:
            self.__balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)

    def one_month_later(self):
        self.__compound_interest()

aaron = BankAccount(1, 800)
aaron.deposit(55)


aaron.__balance = 855
print(aaron.__balance)

aaron.view_balance()
aaron.view_transactions()
aaron.deposit(150)
aaron.view_balance()

