import json

# Retrieve the data into the python file, inside a variable called family
with open("file.json", "r") as file:
    family = json.load(file)


# Print nicely the details about Jane's children
for child in family["children"]:
    print(f"Name: {child['firstName']}")
    print(f"Age: {child['age']}")
    print()

# Inside the family variable, add to each children, a key favorite_color with a value
colors = ["blue", "green"]

for child, color in zip(family["children"], colors):
    child["favorite_color"] = color

# saves to the variable, not the file (yet)
# print(family)

# # Use the indent argument inside the dump function.
with open("file.json", "w") as file:
    json.dump(family, file, indent=4)
