
# Given this list:


list1 = [5, 10, 15, 20, 25, 50, 20]

# find the value 20 in the list, and if it is present, replace it with 200. Only update the first occurrence of a value

# Hint : Look at the index method

# Expected output:
# list1 = [5, 10, 15, 200, 25, 50, 20]

my_index = list1.index(20) # 3

list1[my_index] = 200

print(list1)