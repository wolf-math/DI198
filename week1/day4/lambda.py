my_function = lambda s: s.upper()

# print(my_function("koala"))



fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
map_object = map(lambda s: s.replace("a", "g") , fruit)

# print(list(map_object))

# Using map and filter, try to say hello to everyone who's name is less than or equal to 4 letters
people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

short_people = filter(lambda name: len(name) <= 4, people)
# print(list(short_people))

def greet(name):
    print(f"Hello, {name}")
    return f"Hello, {name}" 

res = map(greet, list(short_people))
print(list(res))