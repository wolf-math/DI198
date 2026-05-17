# Ask the user for a number between 1 and 100
user_input = int(input("Pick a number between 1 and 100 "))


# If the number is a divisible by both three and five, print FizzBuzz instead.
if user_input % 15 == 0:
    print('fizzbuzz')
# If the number is a divisible by three, print Fizz
elif user_input % 3 == 0:
    print('fizz')
# If the number is a divisible by five, print Buzz.
elif user_input % 5 == 0:
    print('buzz')
