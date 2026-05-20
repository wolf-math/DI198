def say_hi():
    """Takes a usename and greets the user"""
    # the above docstgring is better than a comment
    name = input("What is your name? ")
    print(f"Hello, {name}!")


# f(x) = 2x -1

def f(x):
    print(2*x -1)

# f(9)

def greet_user(username):
    """greets a particular user"""
    print(f"Greetings, {username}. Welcome to the show.")

# error
# greet_user("Ariel", "Vasili")

# error
# greet_user()

# no error
# greet_user("Ariel")



def order_shawarma(size="pita"):
    options = ["pita", "laffa", "baguette"]
    if size not in options:
        print("This size is not an option")
    else: 
        print(f"Ordering a shawarma {size}")

# order_shawarma("pita")
# order_shawarma("laffa")
# order_shawarma()
# order_shawarma("salad")


def say_hello(username, language="EN"):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

# say_hello("Rick", "FR")
# # keword argument (kwarg)
# say_hello(username = "Rick", language = "FR")
# say_hello(language = "FR", username = "Rick")
# # say_hello("Bobby", "HE")

# say_hello("Ben")


def order_pizza():
    # variable name is only viewable inside of the function
    name = "Nate"
    print(f"{name} is ordering a pizza.")

# order_pizza()

# Doesn't work, name in local scope of order_pizza
# print(name)

def double(num):
    return num * 2

def add_ten(num):
    return num + 10

def square(num):
    return num ** 2

g = double(3)
h = add_ten(g)
i = square(h)
print(i)

# equivalent
print(square(add_ten(double(3))))

def quadratic(a,b,c):
    val1 = (-b + (b**2 - (4 * a *c))**(0.5)) / (2*a)
    val2 = (-b - (b**2 - (4 * a *c))**(0.5)) / (2*a)
    return val1, val2


# result1, result2 = quadratic(1,2, 10)

result1, result2 = quadratic(1,0,-9)

print(result1)
print(result2)
