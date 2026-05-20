def modifier(s):
    return s.replace("a", "g")

def modifier2(s):
    return s.join(("Chicken", "Monkey"))

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
map_object = map(modifier2, fruit)

print(list(map_object))