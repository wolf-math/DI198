def make_pizza(size, *toppings):
    """
    Summarize the pizza we are about to make.
    """    
    print(f"\n Making a {size}-inch pizza with the following toppings:")   
    for topping in toppings:        
        print("- " + topping)


def cut_pizza():
    print("cutting pizza")


print("pizza.py", __name__)

if __name__ == '__main__':
    print("This is happening in pizza.py")
    make_pizza(24, 'pineapple', 'anchovies', 'strawberries', 'cactus')
    cut_pizza()