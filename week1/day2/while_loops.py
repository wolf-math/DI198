current = 0

# prints numbers 0 to 9
while current < 10:
    current += 1
    if current == 6:
        continue
    print(current)


# current_number = 0
# while current_number <= 10:
#     current_number += 1
#     if 3 < current_number < 7: # If the number is between 3 and 7 
#         continue                # Go back to the beginning of the loop
#     print(current_number)

# password = "1234"
# user_input = input("What is the password? ")

# while user_input != password:
#     print("Wrong password. Try again.")
#     user_input = input("What is the password? ")

# from time import sleep

# while True:
#     print("this is an infinite loop")
#     sleep(0.5)


# active = True

# while active: 
#     city = input("Please enter the name of a city you have visited (enter 'quit' when you are finished): ")
#     if city == 'quit':
#         active = False
#     elif city == 'leave me alone':
#         active = False
#     elif city == 'stop':
#         active = False
#     else:
#         print("I'd love to go to", city)

# print("Goodbye !")

# attempts = 0
# while True: 
#     city = input("Please enter the name of a city you have visited (enter 'quit'  when you are finished): ")
#     if city == 'quit':
#         if attempts > 2:
#             break
#         print(f"You need to try {3 - attempts} more times")
#     else:
#         print("I'd love to go to", city)
    
#     attempts += 1

# print("Goodbye !")