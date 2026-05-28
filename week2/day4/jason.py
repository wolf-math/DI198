import json

my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}

# create a new file (json.dump):
with open("my_file.json", 'w') as file_obj:
    json.dump(my_family, file_obj, indent = 2, sort_keys=True)


# # create a string (json.dumps):
# json_string = json.dumps(my_family)

# print(json_string)


with open('my_file.json', 'r') as file_obj:
    my_family = json.load(file_obj)

print(my_family)
