def starts_with_A(s):
    # is the first letter of the string "A"?
    return s[0] == "A" # boolean

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
filtered_list = filter(starts_with_A, fruit)

print(list(filtered_list))

# doing it by hand
def a_filter(lis):
    filtered_list = []
    for item in lis:
        if item[0] == "A":
            filtered_list.append(item)
    return filtered_list

new_filter = a_filter(fruit)
print(new_filter)
