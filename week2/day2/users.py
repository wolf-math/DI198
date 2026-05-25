class User:
    def __init__(self, username, password, email):
        self.username = username
        self.password = password
        self.email = email

class Admin(User):
    def __init__(self, username, password, email, superuser):
        super.__init__(username, password, email)
        self.superuser = superuser

ariel = User('Ariel', '1234', 'airel@DI.com')
joe = Admin('Joe', '5678', 'Joe@di.com', True)
