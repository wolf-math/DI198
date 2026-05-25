# Given a list of numbers, write a function that returns the sum of every number. BUT you can have a malicious string inside the list.

my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]

def add(numbers):
    total = 0
    for number in numbers:
        try:
            if type(number) != int:
                raise Exception(f"{number} is not a number")
            total += number
            print(f"adding number {number}")
        except:
            pass
    
    return total

total = add(my_list)
print(total)