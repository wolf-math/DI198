def list_items (*args):
    # args is a tuple of the values
    print(args)

    for i in args:
        print(i)

# list_items(2,3,4,5, "kjdnrfg", 903, "ojdnrfg", True, [1,2,3])

def show_kwargs(**kwargs):
    # kwargs is a dictionary of key-value pairs
    print(kwargs)

# show_kwargs(username="aaron", is_coder=True, is_hungry=True, age=88)

def args_and_kwargs(*args, **kwargs):
    print(args)
    print(kwargs)

# args_and_kwargs(1,2,3,4, first="one", second="two", third="three")

def show_info(user, age, *args, **kwargs):
    print(f"The user {user} is {age} years old")

# ignores everything but user and age
show_info("Joe",38, 99, 00, 44, "chicken nuggets")
