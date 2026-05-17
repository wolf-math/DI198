# 1. ask the user to enter his/her name

name = input("What is your name? ")

# 2. use the len() function to check the lenght of the name. if it is less than 5 letter print('You have a short name :)')
name_length = len(name)

if name_length < 5:
    print('You have a short name :)')