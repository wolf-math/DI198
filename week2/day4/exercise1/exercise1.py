
# # Read the file line by line
# with open("nameslist.txt", "r") as f:
#     for line in f:
#         print(line.strip())


# # Read only the 5th line of the file
# with open("nameslist.txt", "r") as file:
#     fifth_line = file.readlines()[4]
#     print(fifth_line.strip())


# # Read only the 5 first characters of the file
# with open("nameslist.txt", "r") as file:
#     first_five = file.read(5)
#     print(first_five)


# # Read all the file and return it as a list of strings. Then split each word into letters
# with open("nameslist.txt", "r") as file:
#     names = file.read().splitlines()

# letters = [list(name) for name in names]

# print(letters)


# # Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
# count_names = {
#     "Darth": names.count("Darth"),
#     "Luke": names.count("Luke"),
#     "Lea": names.count("Lea")
# }

# print(count_names)


# # Append your first name at the end of the file
# my_name = "Aaron"

# with open("nameslist.txt", "a") as file:
#     file.write("\n" + my_name)


# Append "SkyWalker" next to each first name "Luke"

with open("nameslist.txt", "r") as file:
    names = file.read().splitlines()

updated_names = []

for name in names:
    if name == "Luke":
        updated_names.append("Luke SkyWalker")
    else:
        updated_names.append(name)

with open("nameslist_updated.txt", "w") as file:
    for name in updated_names:
        file.write(name + "\n")
